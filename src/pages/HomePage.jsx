import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";
import FooterLanding from "../components/FooterLanding";

const HomePage = () => {
  return (
    <div className="home-page flex flex-col h-screen bg-[#151922]">
      <Header />
      <div className="main-container flex flex-grow">
        <main className="freecontent flex-grow p-8 bg-[#151922]">
          <h2 className="page-title text-3xl font-semibold text-white mb-6">
            Free Courses Exclusive for You!
          </h2>

          {/* Course Cards Section */}
          <div className="course-cards-container flex flex-col gap-6">
            {/* Course Card Example 1 */}
            <CourseCard
              title="Mastering Digital Illustration"
              description="Unleash your creativity and learn how to create stunning digital artwork, from initial sketches to final rendering. This course covers everything you need to know about digital illustration tools and techniques."
              status="Not Started"
              lessons={[
                { title: "Introduction to Digital Art", link: "/lesson/1" },
                { title: "Sketching Techniques for Digital Art", link: "/lesson/2" },
                { title: "Mastering Digital Brushes", link: "/lesson/3" },
                { title: "Digital Painting Basics", link: "/lesson/4" },
                { title: "Creating Depth and Shadows", link: "/lesson/5" },
                { title: "Finalizing Your Artwork", link: "/lesson/6" }
              ]}
            />
            {/* Course Card Example 2 */}
            <CourseCard
              title="Flutter Development for Beginners"
              description="Dive into mobile app development with Flutter. Learn how to build beautiful and performant apps for both iOS and Android, with a focus on hands-on coding and real-world applications."
              status="In Progress"
              lessons={[
                { title: "Introduction to Flutter and Dart", link: "/lesson/1" },
                { title: "Setting Up Your Development Environment", link: "/lesson/2" },
                { title: "Building Your First Flutter App", link: "/lesson/3" },
                { title: "Working with Widgets and Layouts", link: "/lesson/4" },
                { title: "Managing State in Flutter", link: "/lesson/5" },
                { title: "Debugging and Testing Flutter Apps", link: "/lesson/6" }
              ]}
            />
            {/* Course Card Example 3 */}
            <CourseCard
              title="ServiceNow Developer Fundamentals"
              description="Learn how to develop and customize applications using the ServiceNow platform. This course covers the basics of ServiceNow development, scripting, and building workflows to automate business processes."
              status="Completed"
              lessons={[
                { title: "Introduction to ServiceNow Development", link: "/lesson/1" },
                { title: "Creating Tables and Forms", link: "/lesson/2" },
                { title: "ServiceNow Scripting Basics", link: "/lesson/3" },
                { title: "Building Workflows in ServiceNow", link: "/lesson/4" },
                { title: "Integrating with External APIs", link: "/lesson/5" },
                { title: "Deploying and Managing Applications", link: "/lesson/6" }
              ]}
            />
          </div>
        </main>
      </div>
      <FooterLanding />
    </div>
  );
};

export default HomePage;
