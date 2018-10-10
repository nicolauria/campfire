import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

class GetStarted extends React.Component {
  render() {
    return(
    <div className="get-started-1">
      <h2>Start with a workspace</h2>
      <p>In Patter, everything happens in a workspace.
         Like a virtual office building, a workspace is where your team
         can gather in Patter to communicate and get work done.</p>
     <Link to="/get-started/find-patter-workspace" className="get-started-find-workspace">
       <div className="get-started-find-workspace">
        <h3>Find your workspace</h3>
        <p>Join or sign in to existing workspaces</p>
       </div>
     </Link>
     <Link to="/get-started/create-new-workspace">
      <div className="get-started-create-workspace">
        <h3>Create new workspace</h3>
        <p>Join or sign in to existing workspaces</p>
      </div>
     </Link>
    </div>
    )
  }
}

export default GetStarted;
