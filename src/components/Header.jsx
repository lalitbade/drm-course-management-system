import React, { useState, useEffect } from "react";
import { Bell, Search, BookOpen } from "lucide-react";
import "./Header.css";
import { useNavigate } from 'react-router-dom';

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

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <BookOpen size={24} className="logo-icon" /> {/* Book icon for learning */}
        <span>EduSphere</span>
      </div>

      {/* Search Bar */}
      <div className="header-search">
        <Search size={16} className="search-icon" />
        <input type="text" placeholder="Search courses..." />
      </div>

      {/* Icons (Notifications & Profile) */}
      <div className="header-icons">
        <Bell size={20} className="header-icon" />
        
        {/* Profile Icon with Dropdown */}
        <div className="profile-icon" onClick={toggleDropdown}>
          LB
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="dropdown-menu">
            {isLoggedIn ? (
              <div className="dropdown-item" onClick={toggleLoginLogout}>
                Logout
              </div>
            ) : (
              <div className="dropdown-item" onClick={toggleLoginLogout}>
                Login
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
