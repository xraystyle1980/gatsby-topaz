import React from 'react';
import Mc from '../components/Mc';

class Footer extends React.Component {
    render() {
        return (
          <div className="header__background--gradient angle--top-left">
            <footer class="footer footer__background--logo">
              <div className="container">
                <div className="grid-wrapper">
                  <div className="col-12">
                    <h2 className="align-center white signup__label">Sign up for updates from Topaz.</h2>
                    <Mc />
                    <ul className="footer__socialicons icons">
                    <li><a href="https://medium.com/topaztellsthetruth" className="icon alt fa-medium white"><span className="label">Medium</span></a></li>
                    <li><a href="https://twitter.com/topaz_is_LIT" className="icon alt fa-twitter white"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.instagram.com/topaztellsthetruth/" className="icon alt fa-instagram white"><span className="label">Instagram</span></a></li>
                    </ul>
                    <p className="copyright">&copy; Topaz, 2018</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        )
    }
}

export default Footer
