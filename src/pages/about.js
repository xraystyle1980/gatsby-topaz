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


import iconCube from '../assets/images/icon-cube.svg' ;
import iconCubeWhite from '../assets/images/icon-cube-white.svg' ;
import AboutBlocks01 from '../assets/images/about-blocks-01.svg' ;
import logoDecentGray from '../assets/images/logo-decent-gray.svg' ;
import decentGroup from '../assets/images/decent-group.jpg' ;

class Homepage extends React.Component {
    render() {
        // const siteTitle = "Topaz - Blockchain Simplified";

        return (
            <Layout>
              <SEO />
              <Header />
              <div className="header__background--gradient angle--bottom-right">
                <div className="header__background--gradient-about-photo">
                  <div className="header__background--content">
                    <div className="container--nav-clear">
                      <div className="grid-wrapper">
                        <div className="col-2"></div>
                        <div className="col-8 align-center"><img src={iconCubeWhite} alt="Topaz" className="" />
                          <h2 className="hero__headline--white">Bringin' the chain at enterprise scale.</h2>
                        </div>
                        <div className="col-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="--content--padding">
                <div className="container">
                  <div className="grid-wrapper">
                    <div className="col-6">
                      <h2 class="hero__headline">How Topaz Works</h2>
                      <p class="paragraph--larger">We are eliminating the massive cost of blockchain software (currently, accessible by hiring developers such as ourselves to produce custom software) by abstracting away the "blockchain". In other words, we are doing for blockchain what Amazon did for server-side software: making tools for developers to build things better, cheaper, and faster. We aim to make the hairy mess of blockchain go "poof" just like Amazon did with loud server racks. Our initial product is a data storage solution that allows users to send and retrieve data to a public blockchain (Ethereum) through simple API calls (Topaz:Blockchain :: Stripe:Payments :: Twilio:SMS).</p>
                    </div>
                    <div className="col-6 align-center">
                      <img src={AboutBlocks01} alt="Topaz" className="about__image--blocks01" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="">
                <div className="container">
                  <div className="grid-wrapper">
                    <div className="col-12">
                      <h6 class="content__label--dark"><img src={iconCube} alt="Topaz" className="features__image--icon-small" />The Team</h6>
                      <p class="paragraph--larger">We are eliminating the massive cost of blockchain software (currently, accessible by hiring developers such as ourselves to produce custom software) by abstracting away the "blockchain". In other words, we are doing for blockchain what Amazon did for server-side software: making tools for developers to build things better, cheaper, and faster. We aim to make the hairy mess of blockchain go "poof" just like Amazon did with loud server racks. Our initial product is a data storage solution that allows users to send and retrieve data to a public blockchain (Ethereum) through simple API calls (Topaz:Blockchain :: Stripe:Payments :: Twilio:SMS).</p>
                      <p class="paragraph--larger blurb__decent"><img src={logoDecentGray} alt="decent" className="logo__decent" /><strong>decent</strong> is a software development and consultancy firm specializing in blockchain technology. Founded by expert software developers with extensive experience deploying production applications in dozens of programming languages-we are constructing the future of the digital economy, through cryptography.</p>
                    </div>

                  </div>
                </div>
              </section>
              <section className="">
                <div className="container">
                  <div className="grid-wrapper">

                    <div className="col-12">
                      <h2 class="hero__headline">The Future of Finance</h2>
                      <p class="paragraph--larger">By design, a blockchain is resistant to modification of the data. It is "an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way".[7] For use as a distributed ledger, a blockchain is typically managed by a peer-to-peer network collectively adhering to a protocol for inter-node communication and validating new blocks. Once recorded, the data in any given block cannot be altered retroactively without alteration of all subsequent blocks, which requires consensus of the network majority. Although blockchain records are not unalterable, blockchains may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance. Decentralized consensus has therefore been claimed with a blockchain.[8]</p>
                    </div>

                  </div>
                </div>
              </section>
            </Layout>
        );
    }
}

export default Homepage;
