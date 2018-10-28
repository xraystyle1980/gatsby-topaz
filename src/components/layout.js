import React from "react";
import "../assets/scss/main.scss";
import "../assets/scss/topaz.scss";


import Footer from "./Footer";

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
          <div className={`body ${this.state.loading}`}>







            {children}



            <Footer />

          </div>
        );
    }
}

export default Template;
