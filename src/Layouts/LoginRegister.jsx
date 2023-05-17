import React from "react";
import { Outlet } from "react-router-dom";
import LoginRegisterNav from "../Pages/Shared/LoginRegisterNav/LoginRegisterNav";

const LoginRegister = () => {
  return (
    <>
      <LoginRegisterNav />
      <Outlet />
    </>
  );
};

export default LoginRegister;
