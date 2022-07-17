import React from "react";
import "./signup.sass";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup__container">
        <h1 className="signup__title">Sign up</h1>
        <input type="text" placeholder="Username" className="signup__input" />
        <input type="text" placeholder="Email" className="signup__input" />
        <input
          type="password"
          placeholder="Password"
          className="signup__input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="signup__input"
        />

        <button className="signup__button">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
