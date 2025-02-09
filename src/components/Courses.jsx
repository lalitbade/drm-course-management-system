export default function Courses() {
  const courses = [
    {
      category: "Artificial Intelligence",
      date: "MARCH 21, 2025",
      title: "Streamlining Course Scheduling with AI.",
      description:
        "Learn how our AI-powered platform can automate and optimize your course scheduling process, saving time and improving efficiency.",
      image: "/AI_AI.avif",
    },
    {
      category: "LEARNING TOOL",
      date: "APRIL 04, 2025",
      title: "Interactive Learning Tools for Students.",
      description:
        "Discover the array of interactive tools that can enhance the learning experience, including quizzes, assessments, and real-time feedback.",
      image: "/LN.avif",
    },
    {
      category: "SCALABILITY",
      date: "MAY 12, 2025",
      title: "Scalable Platform for Institutions of All Sizes.",
      description:
        "Explore how our platform scales to meet the growing demands of your institution, with seamless integration and efficient management.",
      image: "/yoyo.avif",
    },
  ];

  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen py-16 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Latest Updates on Course Management
        </h2>
        <p className="text-gray-400 mt-2">
          Stay updated with the latest trends, features, and innovations in our course management system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/10 transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <span className="absolute top-3 left-3 bg-indigo-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
                  {course.category}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-4">{course.date}</p>
              <h3 className="text-xl font-semibold mt-2 text-indigo-300">{course.title}</h3>
              <p className="text-gray-400 mt-2">{course.description}</p>
              <a
                href="#"
                className="text-indigo-400 font-semibold mt-4 inline-block hover:text-purple-400 transition-colors"
              >
                Continue Reading &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
