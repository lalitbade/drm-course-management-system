import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer"; // Adjust the path if necessary
import "./CourseDetail.css";

const CourseDetail = () => {
  return (
    <div className="course-detail-page">
      {/* Header at the top */}
      <Header />

      {/* Sidebar & Content Layout */}
      <div className="course-detail-container">
        <Sidebar />

        {/* Main Content */}
        <div className="course-content">
          <h1 className="course-title">Advanced React Development</h1>
          
          {/* Video Player Section */}
          <div className="video-section">
            <VideoPlayer 
              apiEndpoint="http://172.26.44.62:3000/video/21?token_id=85417&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mzg3MDkxNDUsImlhdCI6MTczODcwNTU0NSwic3ViIjoidXNlcl9pZCJ9.9P2Odmc3hTb8-eRfcrmVYaVrV-oHi13FrkkyoFYU4LU"
              username={"Lalit"}
              phoneNumber={"9679096850"}
            />
          </div>

          {/* Course Description */}
          <div className="course-description">
            <h2>About This Course</h2>
            <p>
              This course is designed for developers looking to advance their skills in React. 
              It covers topics like state management, hooks, performance optimization, and 
              advanced component patterns. By the end, you'll be able to build scalable and 
              high-performance React applications.
            </p>
            <h2>What You'll Learn</h2>
            <ul>
              <li>React Hooks & Context API</li>
              <li>State Management with Redux</li>
              <li>Optimizing Performance with Memoization</li>
              <li>Server-Side Rendering & Next.js</li>
              <li>Building Reusable & Scalable Components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
