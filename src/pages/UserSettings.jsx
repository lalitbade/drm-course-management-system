import React, { useState, useEffect } from "react";
import { Settings as SettingsIcon } from "lucide-react";  // Renaming to avoid conflict
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FooterLanding from "../components/FooterLanding";

// Mocked function to get user details after login (you can replace this with actual API call)
const getUserDetails = () => {
  // Mocking user details (replace with API call if needed)
  return {
    username: "JohnDoe",
    email: "john.doe@example.com",
    password: "",
    notificationsEnabled: true,
  };
};

const UserSettings = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    notificationsEnabled: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const userDetails = getUserDetails(); // Replace with actual API call
    setUser(userDetails);
    setLoading(false); // Set loading to false once we get the user data
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">{error}</div>;

  return (
    <div className="settings-page bg-[#151922] text-white min-h-screen">
      <Header />
      <div className="settings-content flex">
        <Sidebar />
        <div className="settings-main p-6 w-full">
          <h2 className="text-3xl font-semibold mb-6">Account Settings</h2>
          <div className="settings-form bg-[#2D3748] p-8 rounded-lg shadow-lg">
            <div className="settings-section mb-6">
              <h3 className="text-xl font-medium text-gray-300 mb-3">User Information</h3>
              <div className="form-group mb-4">
                <label className="text-sm font-medium text-gray-300" htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border rounded-md bg-[#4A5568] text-white"
                />
              </div>
              <div className="form-group mb-4">
                <label className="text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border rounded-md bg-[#4A5568] text-white"
                />
              </div>
            </div>

            <div className="settings-section mb-6">
              <h3 className="text-xl font-medium text-gray-300 mb-3">Security</h3>
              <div className="form-group mb-4">
                <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border rounded-md bg-[#4A5568] text-white"
                />
              </div>
            </div>

            <div className="settings-section mb-6">
              <h3 className="text-xl font-medium text-gray-300 mb-3">Notifications</h3>
              <div className="form-group mb-4">
                <label className="text-sm font-medium text-gray-300" htmlFor="notificationsEnabled">Enable Notifications</label>
                <input
                  type="checkbox"
                  id="notificationsEnabled"
                  name="notificationsEnabled"
                  checked={user.notificationsEnabled}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="form-group flex justify-end">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterLanding />
    </div>
  );
};

export default UserSettings;
