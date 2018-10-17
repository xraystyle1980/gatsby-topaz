import React from 'react';
import Mc from '../components/Mc';

class Header extends React.Component {
    render() {
        return (
          <div className="container">
            <section className="home__header--white">
              <div className="grid-wrapper">
                <div className="col-12">
                  <h1 className="hero__headline--white">Topaz tells the truth.</h1>
                  <p className="hero__paragraph--white"><strong>Proof of existence in one line of code.</strong> No transaction fees, no cryptocurrency storage, no smart contract development.</p>
                  <Mc />
                </div>
              </div>
            </section>
            </div>

        )
    }
}

export default Header
