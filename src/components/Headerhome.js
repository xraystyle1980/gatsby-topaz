import React from 'react';
import Mc from '../components/Mc';

class Headerhome extends React.Component {
    render() {
        return (
          <div className="header__background--content">
            <div className="container">
              <section className="home__header--white">
                <div className="grid-wrapper">
                  <div className="col-12">
                    <h1 className="hero__headline--white">Topaz tells the truth.</h1>
                    <p className="hero__paragraph--white"><strong>Welcome to the future of commerce,</strong> where transparency is demanded amongst businesses, consumers, and regulators. Powered by blockchain technology, Topaz enforces data integrity at enterprise scale.</p>
                    <div className="col-12">
                      <h2 className="align-center white signup__label">Our developer sandbox is open. Come play.</h2>
                    </div>
                    <Mc />
                  </div>
                </div>
              </section>
            </div>
          </div>
        )
    }
}

export default Headerhome
