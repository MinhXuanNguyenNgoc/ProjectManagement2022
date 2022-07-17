import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import ForgotPassword from "../pages/forgotPassword";

const AuthenRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />

      </Routes>
    </>
  );
};

export default AuthenRoutes;
