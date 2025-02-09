import React, { useState, useEffect } from "react";
import { UserCircle, LogOut, PlusCircle } from "lucide-react";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";
import FooterLanding from "../components/FooterLanding";
import CourseForm from "../components/CourseForm";
import Header from "../components/Header";  // Import the Header
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [view, setView] = useState("manageCourses");
  const [courses, setCourses] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch existing courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/courses/");
        const data = await response.json();

        if (data.courses && Array.isArray(data.courses)) {
          setCourses(data.courses);
        } else {
          setError("Failed to fetch courses.");
        }
      } catch (err) {
        setError("Failed to fetch courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Add a course
  const addCourse = async (course) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/courses/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });

      const newCourse = await response.json();
      setCourses([...courses, newCourse]);
      setView("manageCourses");  // Switch to manage view after adding course
    } catch (err) {
      setError("Failed to add the course. Please try again.");
    }
  };

  // Delete a course
  const deleteCourse = async (courseId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/courses/${courseId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setCourses(courses.filter(course => course.id !== courseId));
      } else {
        setError("Failed to delete course. Please try again.");
      }
    } catch (err) {
      setError("Failed to delete course. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard-page flex flex-col h-screen bg-[#151922]">
      {/* Header */}
      <Header />  {/* Use the existing header from your Dashboard */}

      {/* Dashboard Layout */}
      <div className="dashboard-content flex flex-grow">
        <Sidebar />
        <div className="dashboard-main flex-grow p-8 bg-[#151922]">
          <h2 className="dashboard-title text-3xl font-semibold text-white mb-6">
            Admin Dashboard - Manage Courses
          </h2>

          {/* "Add Course" Button */}
          <button
            onClick={() => setView("addCourse")}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 mb-6 transition-colors"
          >
            Add New Course
          </button>

          {/* Display either Manage Courses or Add Course Form */}
          {view === "addCourse" && <CourseForm addCourse={addCourse} />}
          {view === "manageCourses" && (
            <div className="course-cards-container flex flex-col gap-6">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    status={course.difficulty_level.charAt(0).toUpperCase() + course.difficulty_level.slice(1).toLowerCase()} // Capitalized status
                    lessons={Array.from({ length: course.num_lessons }, (_, i) => ({
                      title: `Lesson ${i + 1}`,
                      link: `#`, // Replace with actual lesson link
                    }))}
                    onDelete={() => deleteCourse(course.id)}  // Pass delete function to CourseCard
                  />
                ))
              ) : (
                <div>No courses available.</div>
              )}
            </div>
          )}
        </div>
      </div>

      <FooterLanding />
    </div>
  );
}
