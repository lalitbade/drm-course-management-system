import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Ensure that either email or username is filled, not both
    if (!email && !username) {
      setError("Please enter either username or email");
      return;
    }

    // Check if the provided credentials match the admin credentials
    if (username === "admin" && email === "admin@edusphere.in" && password === "admin123") {
      navigate("/admin");
      return;
    }

    // Prepare the payload as per the provided structure
    const loginData = {
      username: username || "",
      email: email || "",
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token and user data in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to the dashboard
        navigate("/dashboard");
      } else {
        // Display error message from the server
        setError(data.message || "Failed to login");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex">
        {/* Left Side - Open Login Form (No Card) */}
        <div className="w-3/5 h-full flex flex-col justify-center items-center px-8">
          {/* Logo at the Top */}
          <div className="mb-8">
            <img src="/Edu_Sphere_Logo.svg" className="w-35 h-35" alt="EduSphere Logo" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold mb-2">Welcome back</h2>
          <p className="text-gray-600 text-lg mb-6">Enter to get unlimited access to courses</p>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="w-full max-w-sm space-y-5">
            {/* Username Field */}
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Email Field */}
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md text-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Extra Options */}
          <div className="mt-4 text-lg">
            <a href="#" className="text-blue-500">
              Forgot Password?
            </a>
          </div>

          <div className="text-lg text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </div>
        </div>

        {/* Right Side - Full-Screen Image */}
        <div className="w-3/5 h-full">
          <img src="/loginPage.avif" alt="Login Illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Login;