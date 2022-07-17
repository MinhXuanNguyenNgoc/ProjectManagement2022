import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import NavigationBar from "../components/navigationBar";

const HomeRoutes = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default HomeRoutes;
