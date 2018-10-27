import React from 'react';
import logoTopaz from '../assets/images/logo-topaz.svg' ;
import Navigation from '../components/Navigation';


class Header extends React.Component {
    render() {
        return (
          <header className="header__navigation">
            <div className="grid-wrapper">
              <div className="col-6 logo">
                <a href="/"><img src={logoTopaz} alt="Topaz" /></a>
              </div>
              <div className="col-6">
                <Navigation />
              </div>
            </div>
          </header>
        )
    }
}

export default Header
