import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import ForgotPassword from "../pages/forgotPassword";

import backIcon from "../assets/ic_back.png";

const AuthenRoutes = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        style={{
          position: "absolute",
          top: 20,
          left: 30,
          width: "30px",
          height: "30px",
          cursor: "pointer"
        }}
        src={backIcon}
        onClick={() => {
          navigate(-1);
        }}
      />

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default AuthenRoutes;
