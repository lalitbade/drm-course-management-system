import React, { useState } from "react";
import { PlayCircle, RefreshCcw } from "lucide-react"; // Importing icons
import "./CourseCard.css";

const CourseCard = ({ title, description, status = "", lessons = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="course-card">
      {/* Course Header (Click to Expand) */}
      <div className="course-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="course-info">
          {/* Display status with conditional class for styling */}
          <span className={`status-badge ${status.toLowerCase()}`}>
            {status || "Unknown"}
          </span>
          <span className="lessons-count">{lessons.length} Lessons</span>
        </div>
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
      </div>

      {/* Dropdown Content (Visible When Clicked) */}
      {isExpanded && (
        <div className="course-content">
          {lessons.map((lesson, index) => (
            <div key={index} className="lesson-item">
              <a href={lesson.link} target="_blank" rel="noopener noreferrer">
                {lesson.title}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Course Actions */}
      <div className="course-actions">
        <button className="reset-progresses">
          <RefreshCcw size={16} /> Reset Progress
        </button>
        <button className="start-courses">
          <PlayCircle size={16} /> {status === "Completed" ? "Open Course" : "Continue Course"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
