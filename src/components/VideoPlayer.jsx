import React, { useEffect, useRef, useState, useCallback } from "react";
import shaka from "shaka-player";
import CryptoJS from "crypto-js";

const VideoPlayer = ({ apiEndpoint }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const watermarkRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({ top: "10%", left: "10%" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);  // Full volume by default

  // Function to generate random position within the video
  const getRandomPosition = () => {
    const top = Math.random() * 80 + 10;  // Random position between 10% to 90% from the top
    const left = Math.random() * 80 + 10;  // Random position between 10% to 90% from the left
    return { top: `${top}%`, left: `${left}%` };
  };

  // Function to change watermark position every second
  const updateWatermarkPosition = () => {
    const newPosition = getRandomPosition();
    setPosition(newPosition);
  };

  // Decrypt video
  const decryptVideo = useCallback(async (encryptedData, keyBase64, ivBase64) => {
    try {
      const encryptedWordArray = CryptoJS.enc.Base64.parse(encryptedData);
      const keyWordArray = CryptoJS.enc.Base64.parse(keyBase64);
      const ivWordArray = CryptoJS.enc.Base64.parse(ivBase64);

      const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: encryptedWordArray },
        keyWordArray,
        {
          iv: ivWordArray,
          mode: CryptoJS.mode.CFB,
          padding: CryptoJS.pad.NoPadding
        }
      );

      const decryptedBytes = new Uint8Array(decrypted.sigBytes);
      const words = decrypted.words;
      for (let i = 0; i < decrypted.sigBytes; i++) {
        decryptedBytes[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      }

      return new Blob([decryptedBytes], { type: "video/mp4" });
    } catch (error) {
      console.error("Decryption Error:", error);
      setError('Failed to decrypt video content');
      throw error;
    }
  }, []);

  // Initialize player
  const initPlayer = useCallback(async (videoElement, videoURL) => {
    try {
      await shaka.polyfill.installAll();
      if (shaka.Player.isBrowserSupported()) {
        if (playerRef.current) {
          await playerRef.current.destroy();
        }

        const player = new shaka.Player(videoElement);
        playerRef.current = player;

        player.addEventListener('error', (event) => {
          console.error('Shaka Player Error:', event.detail);
          setError('Video playback error occurred');
        });

        await player.load(videoURL);
      } else {
        setError('Browser not supported for video playback');
      }
    } catch (error) {
      console.error('Player initialization error:', error);
      setError('Failed to initialize video player');
    }
  }, []);

  // Fetch and process video
  useEffect(() => {
    let mounted = true;
    let videoURL = null;

    const fetchAndProcessVideo = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.encrypted_data || !data.key || !data.iv) {
          throw new Error("Missing required encryption data");
        }

        const decryptedVideo = await decryptVideo(data.encrypted_data, data.key, data.iv);
        if (mounted) {
          videoURL = URL.createObjectURL(decryptedVideo);
          if (videoRef.current) {
            await initPlayer(videoRef.current, videoURL);
          }
          setLoading(false);
        }
      } catch (error) {
        console.error("Processing Error:", error);
        if (mounted) {
          setError(error.message || 'Failed to process video');
          setLoading(false);

          // Fallback to local video when backend fails
          videoURL = '/videos/videoplayback.mp4'; // Adjust path to your public folder
          if (videoRef.current) {
            videoRef.current.src = videoURL;
            setLoading(false);
          }
        }
      }
    };

    fetchAndProcessVideo();

    // Update watermark position every second
    const watermarkInterval = setInterval(updateWatermarkPosition, 1000);

    // Handle fullscreen change
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        // Adjust watermark position for fullscreen
        setPosition(getRandomPosition());
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      mounted = false;
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      clearInterval(watermarkInterval);  // Clean up interval
      document.removeEventListener("fullscreenchange", handleFullscreenChange);  // Clean up event listener
    };
  }, [apiEndpoint, decryptVideo, initPlayer]);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { // Firefox
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari, Opera
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className="video-container relative w-full h-full">
      <video ref={videoRef} className="video-player w-full h-full object-cover" controls={false} autoPlay />
      {/* Watermark on top of video */}
      <div
        ref={watermarkRef}
        className="watermark absolute"
        style={{ top: position.top, left: position.left, zIndex: 9999, color: 'black', fontSize: '1.5rem', fontWeight: 'bold' }}
      >
        lalit - 7075654053
      </div>

      {/* Custom Controls */}
      <div className="custom-controls absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full p-4 flex justify-between items-center">
        <button onClick={togglePlayPause} className="play-pause-btn text-white text-3xl bg-opacity-50 p-2 rounded-md">
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <div className="volume-controls flex items-center space-x-3">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider w-32"
          />
          <span className="text-black">{Math.round(volume * 100)}%</span>
        </div>
        <button onClick={toggleFullscreen} className="fullscreen-btn text-white text-3xl bg-opacity-50 p-2 rounded-md">
          🗖
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
