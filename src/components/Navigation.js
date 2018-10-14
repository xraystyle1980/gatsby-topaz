import React from "react";

const Navigation = () => (
  <nav className="navbar">
    <span class="navbar-toggle" id="js-navbar-toggle">
      <i class="fas fa-bars"></i>
    </span>
    <a href="#" className="logo">logo</a>
    <ul className="main-nav" id="js-menu">
      <li>
        <a href="#" className="nav-links">Home</a>
      </li>
      <li>
        <a href="#" className="nav-links">Products</a>
      </li>
      <li>
        <a href="#" className="nav-links">About Us</a>
      </li>
      <li>
        <a href="#" className="nav-links">Contact Us</a>
      </li>
      <li>
        <a href="#" className="nav-links">Blog</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
