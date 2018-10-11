import React from 'react';
import { connect } from 'react-redux';
import ChannelSidebarContainer from '../channel_sidebar/channel_sidebar_container';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
})

class MainApp extends React.Component {
  render() {
    return (
      <div className="main">
        <ChannelSidebarContainer />
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainApp);
