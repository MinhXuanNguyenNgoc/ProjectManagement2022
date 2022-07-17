import React from "react";
import "./forgot.sass";

const ForgotPassword = () => {
  return (
    <div className="forgot">
      <div className="forgot__container">
        <h1 className="forgot__title">Forgot Password</h1>
        <input type="text" placeholder="Email" className="forgot__input" />
        <input type="text" placeholder="OTP" className="forgot__input" />
        <input type="password" placeholder="Password" className="forgot__input" />
        <input
          type="password"
          placeholder="Confirm Password"
          className="forgot__input"
        />

        <button className="forgot__button">Reset Password</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
