import React, { useState, useEffect } from "react";
import { PlayCircle, Eye } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import "./Dashboard.css";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://172.26.44.202:8000/api/courses/"); 
        const data = await response.json();

        // Extract courses from the API response
        if (data.courses && Array.isArray(data.courses)) {
          setCourses(data.courses);
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
  }, []);

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
                status={course.difficulty_level} // Use a status based on difficulty level or any other field
                lessons={Array.from({ length: course.num_lessons }, (_, i) => ({
                  title: `Lesson ${i + 1}`,
                  link: `#`, // Replace with actual link
                }))} 
              />
            ))
          ) : (
            <div>No courses available.</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
