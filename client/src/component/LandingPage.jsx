// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2>Welcome to My Page</h2>
      </div>
    </div>
  );
};

export default LandingPage;
