// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { ChakraProvider, CSSReset, Box, Button } from "@chakra-ui/react";
import Sidebar from "./component/Sidebar";
import MenuIcon from "./component/MenuIcon";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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






    </div>
  );
}

export default App;
