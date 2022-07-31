import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import NavigationBar from '../components/navigationBar';
import PlaySound from '../pages/playSound';

const HomeRoutes = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/play" element={<PlaySound />} />
      </Routes>
    </>
  );
};

export default HomeRoutes;
