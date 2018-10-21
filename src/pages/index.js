import React from "react";
import icon32 from '../assets/images/favicon-32x32.png';
import Helmet from "react-helmet";
import Mc from '../components/Mc';


import Layout from '../components/layout';
import FeaturesMultiGraphic from '../assets/images/features-multi-graphic.png' ;
import iconEfficient from '../assets/images/icon-efficient.svg' ;
import iconIntegrate from '../assets/images/icon-integrate.svg' ;
import iconReporting from '../assets/images/icon-reporting.svg' ;

class Homepage extends React.Component {
    render() {
        const siteTitle = "Topaz - Blockchain Simplified";

        return (
            <Layout>
              <Helmet
                title="Topaz | Proof of existence in one line of code"
                meta={[
                  { name: 'description', content: '' },
                  { name: 'keywords', content: '' },
                  { name: 'robots', content: 'noindex, nofollow' },
                ]}
                link={[
                  { rel: 'shortcut icon', sizes: '32x32', type: 'image/png', href: `${icon32}` }
                ]}
                />

                  <section  className="features__hero--home">


                    <div className="container">
                      <div className="grid-wrapper">
                        <div className="col-12">
                          <h2 className="features__headline--dark"><span>Add the value</span> of complex blockchain applications seamlessly to your existing technology stack.</h2>
                        </div>
                      </div>
                    </div>

                    <div className="container features__block">
                      <div className="grid-wrapper">
                        <div className="col-4">
                          <div className="features__block--shadow">
                            <img src={iconEfficient} alt="Efficient" className="features__image--icon" />
                            <h4 className="features__header--desc-dark">EFFICIENT</h4>
                            <p className="features__paragraph--desc-dark">Store data on Ethereum in the most efficient way possible.</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="features__block--shadow">
                            <img src={iconIntegrate} alt="Integrate" className="features__image--icon" />
                            <h4 className="features__header--desc-dark">INTEGRATE</h4>
                            <p className="features__paragraph--desc-dark">Integrate with any existing codebase via first class packages.</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="features__block--shadow">
                            <img src={iconReporting} alt="Reporting" className="features__image--icon" />
                            <h4 className="features__header--desc-dark">REPORTING</h4>
                            <p className="features__paragraph--desc-dark">Generate reports on the data you store on blockchain.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container--blue">
                      <div className="grid-wrapper">
                        <div className="col-12">
                          <div className="features__colorblock">
                            <p className="features__paragraph--light-heavy"><span>Topaz arranges your data</span> and performs Ethereum transactions on a set interval to store the data on a blockchain at no cost to you.</p>
                            <img src={FeaturesMultiGraphic} alt="Topaz" className="features__image--multigraphic" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="grid-wrapper">
                        <div className="col-12">
                          <div className="features__block--under">
                            <p className="features__paragraph--dark-heavy">You can now query and furnish your data, and provide <span>proof of existence and chain of custody</span> over time.</p>
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
