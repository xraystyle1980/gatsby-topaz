import React from "react";
import icon32 from '../assets/images/favicon-32x32.png';
import Helmet from "react-helmet";
import Mc from '../components/Mc';
import SEO from '../components/SEO';

import Header from "../components/Header";


import Layout from '../components/layout';
import FeaturesMultiGraphic from '../assets/images/features-multi-graphic.png' ;
import FeaturesBlocks01 from '../assets/images/features-blocks-01.svg' ;
import FeaturesBlocks02 from '../assets/images/features-blocks-02.svg' ;
import iconEfficient from '../assets/images/icon-efficient.svg' ;
import iconIntegrate from '../assets/images/icon-integrate.svg' ;
import iconReporting from '../assets/images/icon-reporting.svg' ;
import iconArrange from '../assets/images/icon-arrange.svg' ;
import iconCheck from '../assets/images/icon-check.svg' ;
import iconTrust from '../assets/images/icon-trust.svg' ;

class Homepage extends React.Component {
    render() {
        // const siteTitle = "Topaz - Blockchain Simplified";

        return (
            <Layout>

              <SEO />
              <div className="header__background--gradient angle--bottom-right">
                <div className="header__background--logo">
                  <Header />
                  <div className="header__background--content">
                    <div className="container">
                      <section className="home__header--white">
                        <div className="grid-wrapper">
                          <div className="col-12">
                            <h1 className="hero__headline--white">Topaz tells the truth.</h1>
                            <p className="hero__paragraph--white"><strong>Welcome to the future of commerce,</strong> where transparency is required by businesses, consumers, and regulators. Powered by blockchain technology, Topaz offers unparalleled data integrity at enterprise scale.</p>
                            <div className="col-12">
                              <h2 className="align-center white signup__label">Our developer sandbox is open. Come play.</h2>
                            </div>
                            <Mc />
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <section  className="features__hero--home">
                <div className="container features__block">
                  <div className="grid-wrapper">
                    <div className="col-4">
                      <div className="features__block--shadow">
                        <img src={iconTrust} alt="Efficient" className="features__image--icon" />
                        <h4 className="features__header--desc-dark">TRUST</h4>
                        <p className="features__paragraph--desc-dark">Embed trust in any data and secure it with any blockchain.</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="features__block--shadow">
                        <img src={iconIntegrate} alt="Integrate" className="features__image--icon" />
                        <h4 className="features__header--desc-dark">VERIFY</h4>
                        <p className="features__paragraph--desc-dark">Prove the integrity of data and provide accurate chain of custody of assets over time.</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="features__block--shadow">
                        <img src={iconReporting} alt="Reporting" className="features__image--icon" />
                        <h4 className="features__header--desc-dark">REPORT</h4>
                        <p className="features__paragraph--desc-dark">Generate reports to give auditors, customers, and partners complete peace of mind.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="grid-wrapper">
                    <div className="col-12">
                      <h2 className="features__headline--dark">Integrate with any application without worrying about the complexities of decentralized systems - no transaction fees, no smart contract development, no cryptocurrencies - <span>just one line of code.</span></h2>


                    </div>
                  </div>
                </div>

                <div className="container--blue">
                  <div className="grid-wrapper">
                    <div className="col-12">
                      <div className="features__colorblock">
                          <p className="features__paragraph--light"><img src={iconArrange} alt="Arrange" className="features__image--icon-small" />Topaz runs alongside <span>any existing software,</span> extracting data and processing it to be trusted and secured.</p>


                          <img src={FeaturesBlocks01} alt="Topaz" className="features__image--blocks01" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="grid-wrapper">
                    <div className="col-12">
                      <div className="features__block--under">
                      <img src={FeaturesBlocks02} alt="Topaz" className="features__image--blocks02" />
                        <p className="features__paragraph--dark"><img src={iconCheck} alt="Success" className="features__image--icon-small" />Technology has evolved to enforce transparency throughout the entire economy. Help <span>revolutionize the way business is conducted</span> from the inside out.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
        );
    }
}

export default Homepage;
