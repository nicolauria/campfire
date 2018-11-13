import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.guestLoginHelper = this.guestLoginHelper.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
      <div className="form-errors">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
      );
    } else {
      return null;
    }

  }

  guestLogin(e) {
    e.preventDefault();
    const guestUsername = 'Guest'.split('');
    const guestPassword = 'secret'.split('');
    this.setState({username: '', password: ''}, () =>
      this.guestLoginHelper(guestUsername, guestPassword)
    );
  }

  guestLoginHelper(guestUsername, guestPassword) {
    let button = document.getElementById('session-submit');
    if (guestUsername.length > 0) {

      this.setState(
        { username: this.state.username + guestUsername.shift() }, () => {
          window.setTimeout( () =>
            this.guestLoginHelper(guestUsername, guestPassword), 100);
        }
      );
    } else if (guestPassword.length > 0) {

      this.setState(
        { password: this.state.password + guestPassword.shift() }, () => {
          window.setTimeout( () =>
            this.guestLoginHelper(guestUsername, guestPassword), 100);
        }
      );
    } else {

      button.click();
    }
  }

  render() {
    let email;
    if (this.props.formType === 'Sign Up') {
      email = <label>
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
          placeholder="email"
        />
      </label>;
    } else {
      email = "";
    }

    let loginForm;
    if (this.props.errors.length > 0) {
      loginForm = "login-form-with-errors"
    } else {
      loginForm = "login-form-no-errors"
    }

    let otherLoginOption;
    if (this.props.formType === 'Sign Up') {
      otherLoginOption = "Already have an account?"
    } else {
      otherLoginOption = "Need an account?"
    }

    let formInstructions = "Enter a username, password and email:"
    let loginAsGuest = null;
    if (this.props.formType === 'Login') {
      loginAsGuest = <button onClick={this.guestLogin} className="session-submit">Demo Login</button>;
      formInstructions = "Enter your username and password:"
    }


    if (this.props.formType)

    return (

      <div>
        <header>
          <div className="header-container">
            <div>
              <Link to="/" className="header-link">
                <img className="patter-logo" src="http://funkyimg.com/i/2M5GP.png"/>
                <h1>Campfire</h1>
              </Link>
            </div>
            <div className="greeting-container">
              <GreetingContainer />
            </div>
          </div>
        </header>

        <div className="session-form-container">

        {this.renderErrors()}
        <div className={loginForm}>
        <h1 className="login-form-h1">{this.props.formType}</h1>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {formInstructions}
            <div className="login-form">
              <br/>
              <label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="username"
                />
              </label>
              <br/>
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="password"
                />
              </label>
              {email}
              <br/>
              <button id="session-submit" className="session-submit" type="submit">{this.props.formType}</button>
              {loginAsGuest}
              {otherLoginOption} <span className="other-option-link">{this.props.navLink}</span>
            </div>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
