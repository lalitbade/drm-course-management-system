import React, { useState, useEffect } from "react";
import { Bell, Search, BookOpen } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  const [showDropdown, setShowDropdown] = useState(false); // Track dropdown visibility
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // If token exists, the user is logged in
  }, []);

  // Toggle login/logout state
  const toggleLoginLogout = () => {
    if (isLoggedIn) {
      // Logout the user
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login'); // Redirect to login page
    }
    setIsLoggedIn(!isLoggedIn); // Toggle the state
    setShowDropdown(false); // Close the dropdown after action
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle logo click (navigate to dashboard or landing page based on login state)
  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard'); // Redirect to the dashboard for logged-in users
    } else {
      navigate('/landing'); // Redirect to the landing page for non-logged-in users
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0F1C]/80 border-b border-white/10 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 text-white cursor-pointer" onClick={handleLogoClick}>
            <img src="/Edu_Sphere_Logo__.svg" alt="EduSphere Logo" className="filter invert-100" />
          </div>

          {/* Navigation Links (Desktop version) */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink className="text-white/90 hover:text-white transition-all">Platform</NavLink>
            <NavLink className="text-white/90 hover:text-white transition-all">Solutions</NavLink>
            <NavLink className="text-white/90 hover:text-white transition-all">Resources</NavLink>
            <NavLink className="text-white/90 hover:text-white transition-all">Pricing</NavLink>
          </div>

          {/* Right Side (Get Started / Sign In / Sign Out buttons) */}
          <div className="flex items-center gap-6">
            <button onClick={toggleLoginLogout} className="px-6 py-3 text-sm text-white/80 hover:text-white transition-colors">
              {isLoggedIn ? "Sign Out" : "Sign In"}
            </button>
            {!isLoggedIn && (
              <button onClick={toggleLoginLogout} className="px-6 py-3 text-sm bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity">
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
