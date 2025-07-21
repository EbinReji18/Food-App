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
        padding: "1.5rem 0",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a
          className="navbar-brand"
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
