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
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
