import React from "react";

const ThumbnailSection = ({ isOpen }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: isOpen ? "0" : "-200px",
        right: 0,
        width: "100%",
        height: "200px",
        background: "#f5f5f5",
        transition: "bottom 0.3s",
      }}
    >
      {/* Add your thumbnails here */}
    </div>
  );
};

export default ThumbnailSection;
