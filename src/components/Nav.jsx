import { useState, useEffect } from "react";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#fff";
    document.body.style.color = darkMode ? "#f5f5f5" : "#000";
  }, [darkMode]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light"}`}
      style={{
        backgroundColor: darkMode ? "#212529" : "#FE5D26",
        width: "100%", // ✅ FIXED shrinking issue
        position: "relative",
        left: 0,
        top: 0,
        zIndex: 1030,
      }}
    >
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center px-3 py-2">
        {/* Brand */}
        <a
          className="navbar-brand mb-2 mb-lg-0"
          href="#"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1.8rem",
            fontWeight: "600",
            letterSpacing: "1px",
            color: darkMode ? "#FFD54F" : "#fff",
          }}
        >
          Spice Notes
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"} fw-bold`}
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>
    </nav>
  );
}
