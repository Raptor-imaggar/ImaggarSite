// route.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../pages/home';
import Contact from '../pages/GetAdemo/';
import Login from '../pages/login';

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<Contact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Contact />} />
      <Route path="/services" element={<Contact />} />
      <Route path="/products" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="*" element={<Home />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
