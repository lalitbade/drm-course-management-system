import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="freecontent">
          <h2 className="page-title">Free Courses exclusive for you!</h2>
          <div className='cc'>
          <CourseCard
  title="Mastering Digital Illustration"
  description="A complete guide from sketch to screen."
  status="Not Started"
  lessons={[
    { title: "Introduction to Digital Art", link: "/lesson/1" },
    { title: "Sketching Techniques", link: "/lesson/2" },
    { title: "Digital Painting Basics", link: "/lesson/3" }
  ]}
/>
<CourseCard
  title="Flutter Development"
  description="A complete guide from sketch to screen."
  status="Started"
  lessons={[
    { title: "Introduction to Flutter", link: "/lesson/1" },
    { title: "Sketching Techniques", link: "/lesson/2" },
    { title: "Installation", link: "/lesson/3" }
  ]}
/>
<CourseCard
  title="Service Now Developer"
  description="A complete guide from sketch to screen."
  status="Completed"
  lessons={[
    { title: "Introduction to Digital Art", link: "/lesson/1" },
    { title: "Sketching Techniques", link: "/lesson/2" },
    { title: "Digital Painting Basics", link: "/lesson/3" }
  ]}
/>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
