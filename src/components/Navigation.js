import React from "react";
import logo from '../assets/images/logo-topaz.svg' ;

import IconMedium from '../assets/images/icon-medium.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';

const Navigation = () => (

<div className="">
  <nav className="" role="navigation" aria-expanded="false" aria-label="Main menu">

    <div className="page">
      <div className="hamburger">
        <input type="checkbox" id="nav-toggle" />
        <label for="nav-toggle"><span className="toggle-words">Menu</span></label>
        <div className="menu">
          <ul className="ul-menu__outer">
            <li><a className="navlinks__desktop--white" href="/about">About Topaz</a></li>
            <li>
              <ul className="ul-menu__inner-socialicons">
                <li><a href="#" className="icon alt fa-medium white"><span className="label">Medium</span></a></li>
                <li><a href="#" className="icon alt fa-twitter white"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-instagram white"><span className="label">Instagram</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </nav>
</div>

);

export default Navigation;
