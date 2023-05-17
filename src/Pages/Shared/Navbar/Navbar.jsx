import React from "react";
import siteLogo from "../../../assets/logos/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/donation">Donation</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/register" className="btn btn-primary text-white">
          Register
        </Link>
      </li>
      <li>
        <Link to="/admin" className="btn btn-secondary text-white">
          Admin
        </Link>
      </li>
    </>
  );

  return (
    <header>
      <div className="navbar bg-base-100 navbar__container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/">
            <img className="inline-block h-16" src={siteLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex items-center gap-4 text-xl font-semibold">
            {navLink}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
