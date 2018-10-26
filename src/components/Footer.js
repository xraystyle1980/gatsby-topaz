import React from 'react';
import Mc from '../components/Mc';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer footer__background--logo">
              <div className="container">
                <div className="grid-wrapper">
                  <div className="col-12">
                    <h2 className="align-center white signup__label">Sign up for updates from Topaz.</h2>
                    <Mc />
                    <ul className="footer__socialicons icons">
                      <li><a href="#" className="icon alt fa-medium white"><span className="label">Medium</span></a></li>
                      <li><a href="#" className="icon alt fa-twitter white"><span className="label">Twitter</span></a></li>
                      <li><a href="#" className="icon alt fa-instagram white"><span className="label">Instagram</span></a></li>
                    </ul>
                    <p className="copyright">&copy; Topaz, 2018</p>
                  </div>
                </div>
              </div>
            </footer>
        )
    }
}

export default Footer
