import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full md:w-72 lg:w-80">
      <img
        src='/LN.avif'
        alt={course.title}
        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{course.title}</h3>
        <p className="text-gray-500 text-sm mb-2">Instructor: <span className="font-medium text-gray-700">{course.instructor}</span></p>
        <p className="text-gray-500 text-sm mb-4">Category: <span className="font-medium text-gray-700">{course.category}</span></p>
        <div className="border-t border-gray-100 my-4"></div>
        <div className="flex justify-center mt-2">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-all">
            <Link to={`/edit-course/${course.courseId}`}>Edit Course</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageCourses = () => {
  const courses = [
    {
      title: "React for Beginners",
      instructor: "John Doe",
      category: "Web Development",
      price: 29.99,
      num_lessons: 10,
      difficulty_level: "Beginner",
      total_enrolled: 150,
      courseId:2,
    },
    {
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      category: "Programming",
      price: 49.99,
      num_lessons: 20,
      difficulty_level: "Intermediate",
      total_enrolled: 200,
      courseId:4,
    },
    {
      title: "Mastering CSS",
      instructor: "Michael Johnson",
      category: "Web Design",
      price: 39.99,
      num_lessons: 15,
      difficulty_level: "Advanced",
      total_enrolled: 100,
      courseId:3,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-6">
      {courses.map((course) => (
        <CourseCard key={course.title} course={course} />
      ))}
    </div>
  );
};

export default ManageCourses;