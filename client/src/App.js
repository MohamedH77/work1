// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { ChakraProvider, CSSReset, Box, Button } from "@chakra-ui/react";
import Sidebar from "./component/Sidebar";
import MenuIcon from "./component/MenuIcon";
import PlusIcon from "./component/PlusIcon";
import ThumbnailSection from "./component/ThumbnailSection";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isThumbnailSectionOpen, setIsThumbnailSectionOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleThumbnailSection = () => {
    setIsThumbnailSectionOpen(!isThumbnailSectionOpen);
  };

  return (
    <div className="App">
      <navbar className="App-navbar">
        <ChakraProvider>
          <CSSReset />
          <Box>
            <Button colorScheme="blue" onClick={toggleSidebar}>
              <MenuIcon />
            </Button>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          </Box>
        </ChakraProvider>
      </navbar>
      {/* Plus Icon */}
      <PlusIcon onClick={toggleThumbnailSection} />
      
      {/* Thumbnail Section */}
      <ThumbnailSection isOpen={isThumbnailSectionOpen} />
    </div>
  );
}

export default App;
