import React from "react";
import siteLogo from "../../../assets/logos/logo.png";
import { Link } from "react-router-dom";

const LoginRegisterNav = () => {
  return (
    <header className="py-14">
      <nav className="text-center">
        <Link to="/">
          <img src={siteLogo} className="h-16 inline-block" alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default LoginRegisterNav;
