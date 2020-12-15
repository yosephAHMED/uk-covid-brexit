import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Navbar.css";
import Logo from "../../assets/images/coffee.png";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <img src={Logo} alt="logo" className="navbar--logo" />
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">
        <Link to="/">Hub</Link>
      </li>
      <li className="navbar--link-item">
        <Link to="/Covid">Home</Link>
      </li>
      <li className="navbar--link-item">
        <Link to="/Covid/about">About</Link>
      </li>
      <li className="navbar--link-item">
        <Link to="/Covid/donate">Discuss</Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;