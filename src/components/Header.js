import React from 'react';
import Mc from '../components/Mc';

class Header extends React.Component {
    render() {
        return (
            <section className="home__header--white">
              <div className="grid-wrapper">
                <div className="col-12">
                  <h1 className="white">Blockchain simplified.</h1>
                  <p className="white">Get on the blockchain at minimum cost. No transaction fees, no cryptocurrency storage, no smart contract development. Proof of existence in one line of code.</p>
                  <Mc />
                </div>
              </div>
            </section>
        )
    }
}

export default Header
