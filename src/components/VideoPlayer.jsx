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
      if (videoURL) {
        URL.revokeObjectURL(videoURL);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      clearInterval(watermarkInterval);  // Clean up interval
      document.removeEventListener("fullscreenchange", handleFullscreenChange);  // Clean up event listener
    };
  }, [apiEndpoint, decryptVideo, initPlayer]);

  return (
    <div className="video-section">
      <video ref={videoRef} className="video-player" controls autoPlay />
      {/* Watermark on top of video */}
      <div
        ref={watermarkRef}
        className="watermark"
        style={{ top: position.top, left: position.left, zIndex: 99999 }}
      >
        lalit - 7075654053
      </div>
    </div>
  );
};

// Watermark text component
const WatermarkText = () => (
  <div className="text-white text-opacity-40 text-lg font-bold select-none whitespace-nowrap mix-blend-difference">
    Copyright ©️ 2024
  </div>
);

export default VideoPlayer;