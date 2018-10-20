import React from "react";
import icon32 from '../assets/images/favicon-32x32.png';
import Helmet from "react-helmet";
import Mc from '../components/Mc';


import Layout from '../components/layout';
import FeaturesMultiGraphic from '../assets/images/features-multi-graphic.svg' ;
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





                        <div className="col-12">
                          <div className="features__colorblock--amber">
                            <p className="features__paragraph--dark">Topaz arranges your data and performs Ethereum transactions on a set interval to store the data on a blockchain at no cost to you.</p>
                            <img src={FeaturesMultiGraphic} alt="Topaz" className="features__image--multigraphic" />
                          </div>
                          <div className="features__colorblock--trans">
                            <p className="features__paragraph--dark-larger">You can now query and furnish your data, and provide proof of existence and chain of custody over time.</p>
                          </div>
                        </div>


                        <div className="col-4">
                          <div className="features__block--shadow">
                            <img src={iconEfficient} alt="Efficient" className="features__image--icon" />
                            <h4 className="header--blue">EFFICIENT</h4>
                            <p>Store data on Ethereum in the most efficient way possible.</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="features__block--shadow">
                            <img src={iconIntegrate} alt="Integrate" className="features__image--icon" />
                            <h4 className="header--blue">INTEGRATE</h4>
                            <p>Integrate with any existing codebase via first class packages.</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="features__block--shadow">
                            <img src={iconReporting} alt="Reporting" className="features__image--icon" />
                            <h4 className="header--blue">REPORTING</h4>
                            <p>Generate reports on the data you store on blockchain.</p>
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
