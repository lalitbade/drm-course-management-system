import React, { useState, useEffect } from "react";
import { PlayCircle, Eye } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";
import FooterLanding from "../components/FooterLanding";
import "./Dashboard.css";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const coursesPerPage = 3; // Display 3 courses per page

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/courses/?page=${currentPage}&limit=${coursesPerPage}`
        );
        const data = await response.json();

        // Extract courses from the API response
        if (data.courses && Array.isArray(data.courses)) {
          setCourses(data.courses);
          setTotalPages(Math.ceil(data.totalCourses / coursesPerPage)); // Assuming API returns the total number of courses
        } else {
          setError("Data format is incorrect.");
        }
      } catch (err) {
        setError("Failed to fetch courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <div className="dashboard-main">
          <h2 className="dashboard-title">My Courses</h2>
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
              />
            ))
          ) : (
            <div>No courses available.</div>
          )}

          {/* Pagination Controls */}
          <div className="pagination-container">
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <FooterLanding />
    </div>
  );
};

export default Dashboard;
