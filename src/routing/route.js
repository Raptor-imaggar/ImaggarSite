// route.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../pages/home';
import Careers from '../pages/careers/careers';
import Login from '../pages/login';

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/login" element={<Login />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
