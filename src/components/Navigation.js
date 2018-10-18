import React from "react";
import logo from '../assets/images/logo-topaz-bgnodes.svg' ;

import IconMedium from '../assets/images/icon-medium.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';

const Navigation = () => (
  <header className="topaz-header">
    <div className="grid-wrapper">
      <div className="col-6 logo">
        <a href="#home"><img src={logo} alt="Topaz" /></a>
      </div>
      <div className="col-6">
        <nav className="navigation__desktop--white" role="navigation" aria-expanded="false" aria-label="Main menu">
          <ul>
            <li><a className="navlinks__desktop--white" href="#">About Topaz</a></li>
            <li><a className="navlinks__desktop--white" href="#"><img src={IconMedium} alt="Medium" /></a></li>
            <li><a className="navlinks__desktop--white" href="#"><img src={IconTwitter} alt="Twitter" /></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Navigation;
