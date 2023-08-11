import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          DrawerCloseButton
          position="absolute"
          top={0.1}
          left={0.1}
        />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody
          className="Sidebar-bg"
          position="relative"
          overflow="hidden"
        >
          <Box>
            <ChakraLink as={NavLink} to="/" exact>
              Home
            </ChakraLink>
          </Box>
          <Box mt={4}>
            <ChakraLink as={NavLink} to="/about">
              About Me
            </ChakraLink>
          </Box>
          <Box mt={4}>
            <ChakraLink as={NavLink} to="/contact">
              Contact
            </ChakraLink>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
