import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/logo.css";

const Logo = () => {
  return (
    <div className="appLogoContainer">
      <Link to="/">
        <img src={logo} className="appLogo" alt="logo" width="50px" />
      </Link>
      <div>
        <div className="appName">AutoViral</div>
        <div className="appDesc">Your Affiliate Program</div>
      </div>
    </div>
  );
};

export default Logo;
