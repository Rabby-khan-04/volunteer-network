import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../Pages/Shared/AdminNav/AdminNav";

const AdminLayout = () => {
  return (
    <>
      <AdminNav />
      <Outlet />
    </>
  );
};

export default AdminLayout;
