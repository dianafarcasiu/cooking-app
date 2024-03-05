import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className="logo d-flex align-items-center">
      <i className="fa-solid fa-cookie-bite mx-2"></i>
      <p className="m-0">Foodie Zone</p>
    </NavLink>
  );
};

export default Logo;
