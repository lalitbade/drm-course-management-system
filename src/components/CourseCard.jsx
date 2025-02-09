import React, { useState } from "react";
import { PlayCircle, RefreshCcw } from "lucide-react";

const CourseCard = ({ title, description, status = "", lessons = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex bg-[#2D3748] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out mb-6 overflow-hidden">
      {/* Course Image */}
      <div className="w-1/3">
        <img
          src="https://techovedas.com/wp-content/uploads/2023/10/Feature_Leveraging-AI-in-Course-Creation-for-Rapid-Success.webp"
          alt="AI Course"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Course Content */}
      <div className="w-2/3 p-6 flex flex-col justify-between">
        {/* Header (Click to Expand) */}
        <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <span
                className={`text-sm py-1 px-3 rounded-full font-medium ${status === "Completed"
                    ? "bg-green-500"
                    : status === "In Progress"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
              >
                {status || "Unknown"}
              </span>
              <span className="text-sm text-white/80">{lessons.length} Lessons</span>
            </div>
            <h3 className="text-xl font-semibold text-white leading-tight">{title}</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Dropdown Lessons */}
        {isExpanded && (
          <div className="mt-4 space-y-2">
            {lessons.map((lesson, index) => (
              <div key={index} className="text-sm text-blue-400">
                <a
                  href={lesson.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors duration-300 ease-in-out"
                >
                  {lesson.title}
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Course Actions */}
        <div className="flex justify-between items-center mt-6">
          <button className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none transition-all duration-300 ease-in-out">
            <RefreshCcw size={16} className="mr-2" /> Reset Progress
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-md hover:opacity-90 focus:outline-none transition-all duration-300 ease-in-out">
            <PlayCircle size={16} className="mr-2" />
            {status === "Completed" ? "Open Course" : "Continue Course"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
