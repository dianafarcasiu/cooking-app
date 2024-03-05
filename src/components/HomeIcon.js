import React from "react";
import { NavLink } from "react-router-dom";

const HomeIcon = () => {
  return (
    <NavLink to="/">
      <i className="fa-solid fa-house actions"></i>
    </NavLink>
  );
};

export default HomeIcon;
