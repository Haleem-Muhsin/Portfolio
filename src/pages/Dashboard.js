import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  // Redirect to login if no token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">My Portfolio CMS</h2>
        <nav>
          <ul>
            <li
              className={activeTab === "overview" ? "active" : ""}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </li>
            <li
              className={activeTab === "projects" ? "active" : ""}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </li>
            <li
              className={activeTab === "messages" ? "active" : ""}
              onClick={() => setActiveTab("messages")}
            >
              Messages
            </li>
            <li
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </li>
            {/* Logout Button */}
            <li onClick={handleLogout} style={{ marginTop: "auto", background: "#ff7a1a" }}>
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header>
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
        </header>

        <section className="content">
          {activeTab === "overview" && (
            <div className="cards">
              <div className="card">
                <h3>Total Projects</h3>
                <p>12</p>
              </div>
              <div className="card">
                <h3>Total Messages</h3>
                <p>45</p>
              </div>
              <div className="card">
                <h3>Active Users</h3>
                <p>8</p>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h2>Manage Projects</h2>
              <table>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Portfolio Redesign</td>
                    <td>Active</td>
                    <td>Edit | Delete</td>
                  </tr>
                  <tr>
                    <td>Blog Platform</td>
                    <td>Inactive</td>
                    <td>Edit | Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "messages" && (
            <div>
              <h2>User Messages</h2>
              <ul className="messages-list">
                <li>
                  <strong>John Doe:</strong> Loved your portfolio!
                </li>
                <li>
                  <strong>Jane Smith:</strong> Can we collaborate?
                </li>
              </ul>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2>Settings</h2>
              <p>Update your profile and preferences here.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
