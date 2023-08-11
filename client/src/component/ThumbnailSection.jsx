import React from "react";
import PlaceholderImage from "./PlaceholderImage";

const thumbnails = [
  { imageUrl: "https://picsum.photos/150/150", link: "https://example.com/page1" },
  // { imageUrl: "https://picsum.photos/150/150", link: "https://example.com/page2" },
  // { imageUrl: "https://picsum.photos/150/150", link: "https://example.com/page3" },
  // Add more thumbnails as needed
];

const ThumbnailSection = ({ isOpen }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: isOpen ? "0" : "-100px",
        right: 0,
        width: "100%",
        height: "240px", // Adjust the height of the thumbnail section
        background: "#fff",
        transition: "bottom 0.4s",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "flex-start", // Adjust alignment to prevent overlap
        zIndex: "modal", // Ensure it's above other content
      }}
    >
      {thumbnails.map((thumbnail, index) => (
        <PlaceholderImage
          key={index}
          width={150}
          height={150}
          href={thumbnail.link}
          imageUrl={thumbnail.imageUrl} 
        />
      ))}
    </div>
  );
};

export default ThumbnailSection;
