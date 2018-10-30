import React from "react";
import logo from '../assets/images/logo-topaz.svg' ;

import IconMedium from '../assets/images/icon-medium.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';

const Navigation = () => (
  <nav className="navigation__desktop--white" role="navigation" aria-expanded="false" aria-label="Main menu">
    <ul className="icons">
      <li><a href="#" className="icon alt fa-medium white"><span className="label">Medium</span></a></li>
      <li><a href="#" className="icon alt fa-twitter white"><span className="label">Twitter</span></a></li>
      <li><a href="#" className="icon alt fa-instagram white"><span className="label">Instagram</span></a></li>
    </ul>
  </nav>
);

export default Navigation;
