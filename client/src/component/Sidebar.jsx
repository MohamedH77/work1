import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Link,
} from "@chakra-ui/react";
import "./style.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          DrawerCloseButton
          position="absolute"
          top={.1}
          left={.1}
        />
        <DrawerHeader  >Menu</DrawerHeader>
        <DrawerBody className="Sidebar-bg" position="relative" overflow="hidden" >

          <Box>
            <Link href="/about">About Me</Link>
          </Box>
          <Box mt={4} >
            <Link href="/contacts">Contacts</Link>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
