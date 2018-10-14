import React from 'react';
import Mc from '../components/Mc';

class Header extends React.Component {
    render() {
        return (
            <section id="header">
              <div className="inner">
                <h1>Blockchain simplified.</h1>
                <p>Get on the blockchain at minimum cost. No transaction fees, no cryptocurrency storage, no smart contract development. Proof of existence in one line of code.</p>
                <Mc />
              </div>
            </section>
        )
    }
}

export default Header
