import React, { useState } from "react";
import { UserCircle, LogOut, Settings, PlusCircle } from "lucide-react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import "./AdminDashboard.css";
import ManageCourses from "../components/CourseList";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [view, setView] = useState("manageCourses");
  const [courses, setCourses] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const addCourse = (course) => setCourses([...courses, course]);
  const deleteCourse = (index) =>
    setCourses(courses.filter((_, i) => i !== index));

  return (
    <div className="h-screen w-screen flex flex-col bg-white">
  {/* Top Navigation Bar */}
  <div className="h-16 w-full flex items-center px-6 bg-white shadow-md relative">
  <img 
  src="/Edu_Sphere_Logo_yoyo.svg" 
  alt="EduSphere Logo" 
  className="h-10 cursor-pointer" 
  onClick={() => window.location.href = '/dashboard'} 
/>
    <div className="ml-auto relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="focus:outline-none"
      >
        <UserCircle size={32} className="text-black hover:text-blue-600 transition bg-white" />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2 z-20 border border-gray-100">
          <button
            className="flex items-center bg-white text-black w-full p-2 hover:bg-blue-50 rounded-md transition-colors"
            onClick={() => setView("addCourse")}
          >
            <PlusCircle size={16} className="mr-2 text-blue-500" />
            Add Course
          </button>
          <button
            className="flex items-center bg-white text-black w-full p-2 hover:bg-blue-50 rounded-md transition-colors"
          >
            <LogOut size={16} className="mr-2 text-red-500" />
            Logout
          </button>
        </div>
      )}
    </div>
  </div>

      {/* Dashboard Layout */}
      <div className="flex-1 p-6 overflow-auto">
        {view === "addCourse" && <CourseForm addCourse={addCourse} />}
        {view === "manageCourses" && <ManageCourses courses={courses} deleteCourse={deleteCourse} />}
      </div>
    </div>
  );
}