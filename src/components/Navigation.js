import React from "react";
import logo from '../assets/images/logo-topaz.svg' ;

import logoTopaz from '../assets/images/logo-topaz.svg' ;
import IconMedium from '../assets/images/icon-medium.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';

const Navigation = () => (


  <div class="--nav-top">
   <div id="page">
	  <div className="text-center">
  		<h3>Menus</h3>
  		<p>Nothing to see here</p>
  		<a className="btn" href="#menu-fade">Open Menu</a>
  	</div>

  	<div className="menu menu--fade" id="menu-fade">
  		<div className="menu__content">
  			<h3>Menu</h3>

  			<ul>
  				<li>Link 1</li>
  				<li>Link 2</li>
  				<li>Link 3</li>
  				<li>Link 4</li>
  				<li>Link 5</li>
  				<li>Link 6</li>
  				<li>Link 7</li>
  			</ul>

  			<a href="#page" className="menu__close"></a>
  		</div>
  	</div>
  </div>
</div>

);

export default Navigation;
