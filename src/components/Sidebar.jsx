import React from "react";
import { Home, BookOpen, Video, Settings as SettingsIcon, Search } from "lucide-react";  // Renaming Settings to SettingsIcon
import { useNavigate } from "react-router-dom"; // Using useNavigate hook from react-router-dom

const Sidebar = () => {
  const navigate = useNavigate(); // For redirecting to login page after log out

  return (
    <div className="bg-[#111827] text-white w-72 flex-col p-6 shadow-lg"> {/* Changed w-65 to w-72 */}

      {/* Search Bar */}
      <div className="flex items-center bg-[#2D3748] p-3 rounded-lg mb-6">
        <Search size={16} className="text-white" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white ml-3 outline-none w-full"
        />
      </div>

      {/* Navigation Links */}
      <ul className="space-y-6 mb-8">
        <li>
          <a
            href="/dashboard"
            className="flex items-center text-white/90 hover:text-white transition-colors"
          >
            <Home size={16} className="mr-3" />
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/course"
            className="flex items-center text-white/90 hover:text-white transition-colors"
          >
            <BookOpen size={16} className="mr-3" />
            Courses
          </a>
        </li>
        <li>
          <a
            href="/courses"
            className="flex items-center text-white/90 hover:text-white transition-colors"
          >
            <Video size={16} className="mr-3" />
            Free Courses
          </a>
        </li>
        <li>
          <a
            href="/settings"
            className="flex items-center text-white/90 hover:text-white transition-colors"
          >
            <SettingsIcon size={16} className="mr-3" /> {/* Using renamed icon */}
            Settings
          </a>
        </li>
      </ul>

      {/* Course Categories */}
      <div className="mt-6 mb-8">
        <h3 className="text-white/80 font-semibold mb-3">COURSES</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Mastering the Art of Digital Illustration
            </a>
          </li>
          <li>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Photography Essentials
            </a>
          </li>
          <li>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Unlocking the Power of Social Media
            </a>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-6 mb-8">
        <h3 className="text-white/80 font-semibold mb-3">RESOURCES</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Beginner's Guide to SEO
            </a>
          </li>
          <li>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Facebook Blueprint
            </a>
          </li>
          <li>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Canva Design School
            </a>
          </li>
          <li>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Marketing Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Help Center
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
