import React from "react";
import Helmet from "react-helmet";
import Mc from '../components/Mc';

import Layout from '../components/layout';

import IconPlaceholderLogo from '../assets/images/icon-placeholder-logo.svg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Topaz - Blockchain Simplified";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="three" className="features__hero--home">
                    <div className="grid-wrapper">
                      <div className="col-4">
                        <span className=""><img src={IconPlaceholderLogo} alt="" /></span>
                        <h3>Efficient</h3>
                        <p>Store data on Ethereum in the most efficient way possible.</p>
                      </div>
                      <div className="col-4">
                        <span className=""><img src={IconPlaceholderLogo} alt="" /></span>
                        <h3>Integrate</h3>
                        <p>Integrate with any existing codebase via first class packages.</p>
                      </div>
                      <div className="col-4">
                        <span className=""><img src={IconPlaceholderLogo} alt="" /></span>
                        <h3>Reporting</h3>
                        <p>Generate reports on the data you store on blockchain.</p>
                      </div>
                    </div>
                </section>

                <section id="four" className="main bodyctatemp special">
                    <div className="container">
                        <Mc />
                    </div>

                    
                </section>

            </Layout>
        );
    }
}

export default Homepage;
