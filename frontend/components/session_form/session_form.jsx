import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

    return (
      <div className="form-errors-container">
        {this.renderErrors()}
        <div className={loginForm}>
        <h1 className="login-form-h1">{this.props.formType}</h1>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Please {this.props.formType} or {this.props.navLink}
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
              <button className="session-submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
