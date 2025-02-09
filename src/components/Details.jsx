export default function Details() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white flex items-center justify-center px-10">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Secure & Scalable<br />
            <em className="italic text-gray-300">Course Management for Your Institution</em>
          </h1>
          <p className="text-gray-400 mt-6 leading-relaxed">
            Empower your institution with our cutting-edge platform that streamlines course management, enhances learning experiences, and scales effortlessly to meet the needs of your students and educators.
          </p>
          <button className="mt-6 px-6 py-3 text-lg bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity">
            ▶ Watch Demo
          </button>
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-2 gap-6">
        <div className="p-6 border border-white/10 rounded-xl bg-white/10 backdrop-blur-lg shadow-md">
    <div className="text-3xl mb-3">📚</div>
    <h2 className="text-xl font-semibold text-indigo-400">Course Scheduling</h2>
    <p className="text-gray-400 mt-2 leading-relaxed">
      Effortlessly schedule and manage your courses. Customize timetables, manage course loads, and track progress in real-time.
    </p>
  </div>
  <div className="p-6 border border-white/10 rounded-xl bg-white/10 backdrop-blur-lg shadow-md">
    <div className="text-3xl mb-3">📊</div>
    <h2 className="text-xl font-semibold text-indigo-400">Learning Analytics</h2>
    <p className="text-gray-400 mt-2 leading-relaxed">
      Get insights into your learning patterns. Analyze performance metrics, track progress, and optimize your study plans effectively.
    </p>
  </div>
  <div className="p-6 border border-white/10 rounded-xl bg-white/10 backdrop-blur-lg shadow-md">
    <div className="text-3xl mb-3">🎥</div>
    <h2 className="text-xl font-semibold text-indigo-400">Interactive Lessons</h2>
    <p className="text-gray-400 mt-2 leading-relaxed">
      Engage with interactive video lessons, quizzes, and hands-on exercises to enhance your understanding and retention.
    </p>
  </div>
  <div className="p-6 border border-white/10 rounded-xl bg-white/10 backdrop-blur-lg shadow-md">
    <div className="text-3xl mb-3">🏆</div>
    <h2 className="text-xl font-semibold text-indigo-400">Certification Tracking</h2>
    <p className="text-gray-400 mt-2 leading-relaxed">
      Keep track of certifications and achievements. Earn digital badges and share your progress with peers and employers.
    </p>
  </div>
            </div>
          
        </div>
      </div>

  );
}
