import React from "react";
import FavoritesIcon from "../components/FavoritesIcon";
import HomeIcon from "../components/HomeIcon";

const NavbarActions = () => {
  return (
    <div className="d-flex gap-md-4 gap-sm-2">
      <FavoritesIcon />
      <HomeIcon />
    </div>
  );
};

export default NavbarActions;
