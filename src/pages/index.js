import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Topaz - Blockchain Simplified";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="three" className="main">
                    <div className="grid-wrapper">
                      <div className="col-4">
                        <span className="image fit"><img src={pic02} alt="" /></span>
                        <h3>Magna feugiat lorem</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                      </div>
                      <div className="col-4">
                        <span className="image fit"><img src={pic02} alt="" /></span>
                        <h3>Magna feugiat lorem</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                      </div>
                      <div className="col-4">
                        <span className="image fit"><img src={pic02} alt="" /></span>
                        <h3>Magna feugiat lorem</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                      </div>
                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
