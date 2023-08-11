import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import ThumbnailSection from "./ThumbnailSection";

const PlusIcon = () => {
  const [isThumbnailSectionOpen, setIsThumbnailSectionOpen] = useState(false);

  const toggleThumbnailSection = () => {
    setIsThumbnailSectionOpen(!isThumbnailSectionOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={toggleThumbnailSection}
        style={{
          position: "fixed",
          bottom: "50%",
          right: "10px",
          transform: "translateY(50%)",
          cursor: "pointer",
          transition: "transform 0.3s",
          // eslint-disable-next-line 
          transform: isThumbnailSectionOpen ? "rotate(90deg)" : "none", // Rotate plus 
        }}
      >
        {isThumbnailSectionOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
      </div>
      <ThumbnailSection isOpen={isThumbnailSectionOpen} />
    </div>
  );
};

export default PlusIcon;
