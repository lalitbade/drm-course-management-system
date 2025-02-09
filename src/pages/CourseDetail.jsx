import React from "react";
import FooterLanding from "../components/FooterLanding";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer"; // Adjust the path if necessary
import SecurityLayer from "../components/Securitylayer"; // Import the SecurityLayer component

const CourseDetail = () => {
  return (
    <div className="course-detail-page bg-[#0f1218] text-white min-h-screen">
      {/* Header at the top */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="course-detail-container flex-1 p-8">
          <h1 className="text-4xl font-extrabold text-gray-100 mb-8 tracking-tight">
            Advanced React Development
          </h1>

          {/* Wrap only the main content inside SecurityLayer */}
          <SecurityLayer>
            {/* Video Player Section */}
            <div className="video-section bg-[#2D3748] rounded-lg shadow-lg mb-8 p-6 w-full max-w-5xl mx-auto">
              <VideoPlayer
                apiEndpoint="http://172.26.44.62:3000/video/21?token_id=85417&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mzg3MDkxNDUsImlhdCI6MTczODcwNTU0NSwic3ViIjoidXNlcl9pZCJ9.9P2Odmc3hTb8-eRfcrmVYaVrV-oHi13FrkkyoFYU4LU"
                username={"Lalit"}
                phoneNumber={"9679096850"}
              />
            </div>

            {/* Course Description Section */}
            <div className="course-description bg-[#2D3748] rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-300 mb-6 tracking-wide">About This Course</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                This course is designed for developers looking to advance their skills in React. 
                It covers topics like state management, hooks, performance optimization, and 
                advanced component patterns. By the end, you'll be able to build scalable and 
                high-performance React applications.
              </p>

              <h2 className="text-3xl font-semibold text-gray-300 mb-6 tracking-wide">What You'll Learn</h2>
              <ul className="list-disc pl-6 text-gray-400 space-y-4 text-lg">
                <li className="hover:text-indigo-500 transition-colors duration-300 ease-in-out">
                  React Hooks & Context API
                </li>
                <li className="hover:text-indigo-500 transition-colors duration-300 ease-in-out">
                  State Management with Redux
                </li>
                <li className="hover:text-indigo-500 transition-colors duration-300 ease-in-out">
                  Optimizing Performance with Memoization
                </li>
                <li className="hover:text-indigo-500 transition-colors duration-300 ease-in-out">
                  Server-Side Rendering & Next.js
                </li>
                <li className="hover:text-indigo-500 transition-colors duration-300 ease-in-out">
                  Building Reusable & Scalable Components
                </li>
              </ul>

              {/* Enroll Button */}
              <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 ease-in-out">
                  Enroll Now
                </button>
              </div>
            </div>
          </SecurityLayer>
        </div>
      </div>

      {/* Footer */}
      <FooterLanding />
    </div>
  );
};

export default CourseDetail;
