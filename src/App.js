import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'; // Login page
import Dashboard from './pages/Dashboard'; // Dashboard page
import CourseDetail from './pages/CourseDetail'; // CourseDetail page
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import EditCourseForm from './pages/EditCourseContent';
import LandingPage from './pages/LandingPage';
import UserSettings from './pages/UserSettings';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<CourseDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path='/edit-course/:id' element={<EditCourseForm />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
