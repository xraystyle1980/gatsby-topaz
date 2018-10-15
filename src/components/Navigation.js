import React from "react";
import pic01 from '../assets/images/logo-topaz.svg' ;


const Navigation = () => (
  <header>
    <a href="#main-menu" class="menu-toggle" role="button" id="main-menu-toggle" aria-expanded="false" aria-controls="main-menu" aria-label="Open main menu">
      <span className="sr-only">Open main menu</span>
      <span className="fa fa-bars" aria-hidden="true"></span>
    </a>

    <a href="#home" className="logo"><img src={pic01} alt="Topaz" /></a>

    <nav id="main-menu"
         className="main-menu"
         role="navigation"
         aria-expanded="false"
         aria-label="Main menu">
      <a href="#main-menu-toggle"
         class="menu-close"
         role="button"
         id="main-menu-close"
         aria-expanded="false"
         aria-controls="main-menu"
         aria-label="Close main menu">
        <span className="sr-only">Close main menu</span>
        <span className="fa fa-close" aria-hidden="true"></span>
      </a>
      <ul>
        <li><a className="navlinks__desktop--white" href="#">Learn</a></li>
        <li><a className="navlinks__desktop--white" href="#">About</a></li>
        <li><a className="navlinks__desktop--white" href="#">Contact</a></li>
      </ul>
    </nav>
    <a href="#main-menu-toggle"
       className="backdrop"
       tabindex="-1"
       aria-hidden="true"
       hidden></a>
  </header>
);

export default Navigation;
