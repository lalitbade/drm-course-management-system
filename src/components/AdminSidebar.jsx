import React from "react";
import { PlusCircle, BookOpen, Upload } from "lucide-react";
import "./AdminSidebar.css";

export default function AdminSidebar({ setView }) {
  return (
    <aside className="admin-sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="admin-menu">
        <li>
          <button onClick={() => setView("addCourse")}>
            <PlusCircle size={16} /> Add Course
          </button>
        </li>
        <li>
          <button onClick={() => setView("manageCourses")}>
            <BookOpen size={16} /> Manage Courses
          </button>
        </li>
        {/* <li>
          <button onClick={() => setView("uploadVideo")}>
            <Upload size={16} /> Upload Video
          </button>
        </li> */}
      </ul>
    </aside>
  );
}