import React from "react";
import { Link } from "react-router-dom";
import "./navigation.sass";

function NavigationBar() {
  const username = localStorage.getItem("isLogin");

  return (
    <div className="nav">
      <div className="nav__content">
        <h1 className="nav__title">Text to Speech</h1>
        <p className="nav__subtitle">Quickly covert words into sound</p>
      </div>

      <Link type="button" className="nav__loginBtn" to={"/authentication/signIn"} onClick={()=>{localStorage.removeItem("isLogin")}}>
        {username ? "Logout" : "Login"}
      </Link>
    </div>
  );

  
}

export default NavigationBar;
