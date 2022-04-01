import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="bg-green-200">
      <div></div>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Navbar;
