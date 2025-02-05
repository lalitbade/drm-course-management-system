import React, { useState } from "react";

export default function CourseForm({ addCourse }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [numLessons, setNumLessons] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [durationWeeks, setDurationWeeks] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [totalEnrolled, setTotalEnrolled] = useState("");
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && instructor && category && price && numLessons && startDate && endDate && durationWeeks && difficultyLevel && totalEnrolled) {
      addCourse({
        title,
        description,
        instructor,
        category,
        price,
        numLessons,
        startDate,
        endDate,
        durationWeeks,
        difficultyLevel,
        totalEnrolled,
        status: "Not Started",
        lessons: [],
      });
      setTitle("");
      setDescription("");
      setInstructor("");
      setCategory("");
      setPrice("");
      setNumLessons("");
      setStartDate("");
      setEndDate("");
      setDurationWeeks("");
      setDifficultyLevel("");
      setTotalEnrolled("");
    }
  };

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!video) {
      setError("Please select a video file to upload.");
      return;
    }

    setError(null);
    setIsUploading(true);

    const formData = new FormData();
    formData.append("video", video);

    try {
      const response = await fetch("http://172.26.44.238:8000/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload video.");
      }

      const data = await response.json();
      alert(`Video "${data.fileName}" uploaded successfully!`);
      setVideo(null);
    } catch (error) {
      setError(error.message || "An error occurred while uploading the video.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Instructor"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Price ($)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="number"
            placeholder="Number of Lessons"
            value={numLessons}
            onChange={(e) => setNumLessons(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Duration (Weeks)"
            value={durationWeeks}
            onChange={(e) => setDurationWeeks(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Difficulty Level"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Total Enrolled"
            value={totalEnrolled}
            onChange={(e) => setTotalEnrolled(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-700">Upload Thumbnail Image</h4>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-700">Upload Video</h4>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {isUploading && <p className="text-blue-500">Uploading...</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}
