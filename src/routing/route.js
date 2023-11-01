// route.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../pages/home';
import Careers from '../pages/careers/careers';

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
