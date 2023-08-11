import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, CSSReset, Box, Button } from "@chakra-ui/react";
import Sidebar from "./component/Sidebar";
import MenuIcon from "./component/MenuIcon";
import PlusIcon from "./component/PlusIcon";
import ThumbnailSection from "./component/ThumbnailSection";
import { LandingPage, Contact, Aboutme } from "./pages";
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
    <Router>
      <div className="App">
        <ChakraProvider>
          <CSSReset />
          <Box>
            <Button colorScheme="blue" onClick={toggleSidebar}>
              <MenuIcon />
            </Button>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          </Box>
        </ChakraProvider>

        {/* Plus Icon */}
        <PlusIcon onClick={toggleThumbnailSection} />

        {/* Thumbnail Section */}
        <ThumbnailSection isOpen={isThumbnailSectionOpen} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
