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

                </section>

                <section id="four" className="main special">



                </section>

            </Layout>
        );
    }
}

export default Homepage;
