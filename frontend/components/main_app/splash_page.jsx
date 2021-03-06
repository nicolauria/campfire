import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {
  render() {
    return(
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
        <div className="splash-page-container">
          <img src="http://funkyimg.com/i/2M5GP.png"/>
          <div className="sp-text-content">
            <h1>Conversation<br />Starts Here</h1>
            <p>A messaging app for work, fun and everything else.</p>
            <Link className="session-submit" to="/login">Login</Link>
            <Link className="session-submit" to="/login">Demo Login</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashPage;
