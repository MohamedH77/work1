import React from "react";
import { Box, Image } from "@chakra-ui/react";

const PlaceholderImage = ({ width, height, href, imageUrl }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Box width={width} height={height}>
        <Image src={imageUrl} alt="Placeholder" objectFit="cover" />
      </Box>
    </a>
  );
};

export default PlaceholderImage;
