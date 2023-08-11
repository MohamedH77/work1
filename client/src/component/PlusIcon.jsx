import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ThumbnailSection from "./ThumbnailSection";

const PlusIcon = () => {
  const [isThumbnailSectionOpen, setIsThumbnailSectionOpen] = useState(false);

  const toggleThumbnailSection = () => {
    setIsThumbnailSectionOpen(!isThumbnailSectionOpen);
  };

  return (
    <div>
      <div
        onClick={toggleThumbnailSection}
        style={{
          position: "fixed",
          bottom: "50%",
          right: "10px",
          transform: "translateY(50%)",
          cursor: "pointer",
        }}
      >
        <FaPlus size={24} />
      </div>
      <ThumbnailSection isOpen={isThumbnailSectionOpen} />
    </div>
  );
};

export default PlusIcon;
