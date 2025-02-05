import React from "react";
import { Home, BookOpen, Video, Settings, Search } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">

      {/* Search Bar */}
      <div className="sidebar-search">
        <Search size={16} className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Navigation Links */}
      <ul className="sidebar-menu">
        <li><a href="/dashboard"><Home size={16} /> Dashboard</a></li>
        <li><a href="/course"><BookOpen size={16} /> Courses</a></li>
        <li><a href="/courses"><Video size={16} /> Videos</a></li>
        <li><a href="/settings"><Settings size={16} /> Settings</a></li>
      </ul>

      {/* Course Categories */}
      <div className="sidebar-section">
        <h3>COURSES</h3>
        <ul>
          <li><a href="#">Mastering the Art of Digital Illustration</a></li>
          <li><a href="#">Photography Essentials</a></li>
          <li><a href="#">Unlocking the Power of Social Media</a></li>
          <li><a href="#">The Art of Mindful Living</a></li>
          <li><a href="#">Coding for Creatives</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div className="sidebar-section">
        <h3>RESOURCES</h3>
        <ul>
          <li><a href="#">Beginner's Guide to SEO</a></li>
          <li><a href="#">Facebook Blueprint</a></li>
          <li><a href="#">Canva Design School</a></li>
          <li><a href="#">Marketing Guide</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
      </div>

      {/* User Profile */}
      <div className="sidebar-profile">
        <div className="profile-info">
          <div className="profile-icon">LB</div>
          <div>
            <p className="profile-name">Lalit Bade</p>
            <p className="profile-email">lbade@gitam.in</p>
          </div>
        </div>
        <button className="logout-btn">Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
