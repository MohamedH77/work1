import { Box, Drawer, DrawerContent, DrawerOverlay, DrawerHeader, DrawerBody, DrawerCloseButton, Link,} from "@chakra-ui/react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Box>
            <Link href="/about">About Me</Link>
          </Box>
          <Box mt={4}>
            <Link href="/contacts">Contacts</Link>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
