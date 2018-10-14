import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainAppContainer from './main_app/main_app_container';
import CurrentChannel from './channel/current_channel_container';

const App = () => (
  <div>
    <div id="main-content">
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/" component={MainAppContainer} />
        <ProtectedRoute exact path="/channels/:channelId" component={MainAppContainer} />
        <Route path="/" component={LogInFormContainer} />
      </Switch>
    </div>
  </div>
);


export default App;
