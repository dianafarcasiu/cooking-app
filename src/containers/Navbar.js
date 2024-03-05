import React from "react";
import Logo from "../components/Logo";
import Search from "../components/Search";
import NavbarActions from "./NavbarActions";

const Navbar = ({ value, onChange, isHomePage }) => {
  return (
    <div className="navbar containers d-flex justify-content-between my-4 px-5">
      <Logo />
      {isHomePage && <Search value={value} onChange={onChange} />}
      <NavbarActions />
    </div>
  );
};

export default Navbar;
