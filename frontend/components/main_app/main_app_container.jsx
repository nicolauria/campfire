import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
})

class MainApp extends React.Component {
  render() {
    return (
      <div className="welcome=box">
        <h1>Welcome {this.props.currentUser.username}!</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainApp);
