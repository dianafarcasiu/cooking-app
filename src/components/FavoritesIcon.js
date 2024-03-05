import React from "react";
import { NavLink } from "react-router-dom";

const FavoritesIcon = () => {
  return (
    <NavLink to="/favorites">
      <i className="fa-regular fa-heart actions"></i>
    </NavLink>
  );
};

export default FavoritesIcon;
