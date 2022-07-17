import React from "react";
import "./signin.sass";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin__container">
        <h1 className="signin__title">Log in</h1>
        <input type="text" placeholder="Username" className="signin__input" />
        <input type="password" placeholder="Password" className="signin__input" />
        <div className="signin__row">
          <Link className="signin__forgot" to="/authentication/forgot">
            Forgot password?
          </Link>
          <Link className="signin__signup" to="/authentication/signup">
            Sign up
          </Link>
        </div>
        <button className="signin__button">Login</button>
      </div>
    </div>
  );
};

export default SignIn;
