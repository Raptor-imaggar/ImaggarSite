import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routing/route';
import Header from './components/general/header';
import Footer from './components/general/footer';
import CustomCursor from './CustomCursor';
import Chatbox from './components/general/chatbot';
import Loading from './components/LoadingSpinner/LoadingSpinner'; 
// Import the Loading component

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State variable to control loading screen

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    // Simulate loading for a few seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <Router>
      <CustomCursor> </CustomCursor>
      <div className="app">
        <Header />
        <AppRoutes />
        <Chatbox />
        {/* <Footer /> */}
      </div>
      {isLoading && <Loading />} {/* Display Loading component when isLoading is true */}
    </Router>
  );
};

export default App;
