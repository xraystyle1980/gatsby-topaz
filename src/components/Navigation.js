import React from "react";
import logo from '../assets/images/logo-topaz-bgnodes.svg' ;


const Navigation = () => (
  <header className="topaz-header">
    <div className="grid-wrapper">
      <div className="col-6 logo">
        <a href="#home"><img src={logo} alt="Topaz" /></a>
      </div>
      <div className="col-6">
        <nav className="navigation__desktop--white" role="navigation" aria-expanded="false" aria-label="Main menu">
          <ul>
            <li><a className="navlinks__desktop--white" href="#">Learn</a></li>
            <li><a className="navlinks__desktop--white" href="#">About</a></li>
            <li><a className="navlinks__desktop--white" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Navigation;
