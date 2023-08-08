import React from "react";
import { FaPlus } from "react-icons/fa";

const PlusIcon = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
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
  );
};

export default PlusIcon;
