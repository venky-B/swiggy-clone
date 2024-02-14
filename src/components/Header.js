import React from "react";
import LOGO from "../assets/swiggy_logo.png";
import Location from "./Location";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex justify-between  items-center py-3 shadow-lg">
      <div className="flex items-center space-x-16 ">
        <img className="w-24" src={LOGO} alt="swiggy logo" />
        <Location />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
