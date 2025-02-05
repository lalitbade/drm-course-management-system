import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role set to 'student'
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://172.26.44.202:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: name, email, password, role }), // Include role
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to sign up');
        return;
      }

      const data = await response.json();
      // Store token and user data in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex">
  {/* Left Side - Signup Form (No Card) */}
  <div className="w-3/5 h-full flex flex-col justify-center items-center px-12">
    {/* Logo at the Top */}
    <div className="mb-8">
      <img src="/Edu_Sphere_Logo_yoyo.svg" className="w-30 h-30" alt="EduSphere Logo" />
    </div>

    {/* Heading */}
    <h2 className="text-4xl font-semibold mb-2">Create Your Account</h2>
    <p className="text-gray-600 text-lg mb-6">
      Join now and start exploring courses
    </p>

    {/* Error Message */}
    {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

    {/* Signup Form */}
    <form onSubmit={handleSignup} className="w-full max-w-sm space-y-5">
      {/* Name Field */}
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Email Field */}
      <input
        type="email"
        className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Password Field */}
      <input
        type="password"
        className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Confirm Password Field */}
      <input
        type="password"
        className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      {/* Role Selection */}
      <select
        className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      >
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-md text-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Sign Up
      </button>
    </form>

    {/* Extra Options */}
    <div className="mt-4 text-lg">
      Already have an account?{" "}
      <a href="/login" className="text-blue-500 hover:underline">Login</a>
    </div>
  </div>

  {/* Right Side - Full-Screen Image */}
  <div className="w-3/5 h-full">
    <img 
      src="/imageee.avif" 
      alt="Signup Illustration" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

      {/* <Footer/> */}
    </>
  );
}
