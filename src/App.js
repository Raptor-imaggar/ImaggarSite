// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routing/route';
import Header from './components/general/header';
import Footer from './components/general/footer';
import { useState,useEffect } from 'react';
import './App.css';
import CustomCursor from './CustomCursor';

const App = () => {

  
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
  
  return (
    <Router>
    <CustomCursor> </CustomCursor>
      <div className="app">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
     
    </Router>
  );
};

export default App;
