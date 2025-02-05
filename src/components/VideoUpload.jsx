import React, { useState } from "react";
import "./VideoUpload.css";

export default function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!video) {
      setError("Please select a video file to upload.");
      return;
    }

    setError(null);
    setIsUploading(true);

    // Create a FormData object to send the file as 'multipart/form-data'
    const formData = new FormData();
    formData.append("video", video);

    try {
      const response = await fetch("http://172.26.44.238:8000/api/upload", {
        method: "POST",
        body: formData,  // Send the FormData as the request body
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`  // Include auth token if required
        }
      });

      if (!response.ok) {
        throw new Error("Failed to upload video.");
      }

      const data = await response.json();
      alert(`Video "${data.fileName}" uploaded successfully!`);

      // Reset the state after successful upload
      setVideo(null);
    } catch (error) {
      setError(error.message || "An error occurred while uploading the video.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="video-upload">
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      
      {error && <p className="error-message">{error}</p>}
      
      {video && !isUploading && (
        <button onClick={handleUpload}>Upload</button>
      )}

      {isUploading && <p>Uploading...</p>}
    </div>
  );
}
