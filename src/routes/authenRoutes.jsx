import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/signIn";

const AuthenRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default AuthenRoutes;
