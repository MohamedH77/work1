
import React from "react";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2>About me!</h2>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default AboutMePage;
