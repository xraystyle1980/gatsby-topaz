import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp';


export default class IndexPage extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault();
    console.log('submit', this.state)
    addToMailchimp(this.state.email, {name: this.state.name})
    .then(({msg, result}) => {
      console.log('msg', `${result}: ${msg}`);
      if (result !== 'success') {
        throw msg;
      }
      alert(msg);
    })
    .catch(err => {
      console.log('err', err);
      alert(err);
    });
  }

  render() {
    return (
      <section>
        <form onSubmit={this._handleSubmit} className="form__signup--inline">
          <div className="grid-wrapper">
            <div className="col-12">
              <h2 className="align-center white signup__label">Our developer sandbox is open. Come play.</h2>
            </div>
            <div className="col-6">
              <input type="email" onChange={this._handleChange} placeholder="&#xf0e0; &nbsp;Email" name="email" />
            </div>
            <div className="col-6 align-center">
              <input type="submit" value="Sign Up" />
            </div>
          </div>
        </form>
      </section>

    )
  }
}
