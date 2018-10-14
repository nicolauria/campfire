import React from 'react';
import { connect } from 'react-redux';
import ChannelSidebar from '../channel_sidebar/channel_sidebar_container';
import ModalContainer from '../../modals/modal_container';
import CurrentChannel from '../channel/current_channel_container';
import { Route } from 'react-router-dom';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
})

class MainApp extends React.Component {
  render() {
    return (
      // <div className="main">
      //   <ChannelSidebarContainer />
      //   <Route path="/channels/:channelId" component={CurrentChannel}/>
      // </div>
      <div className="main">
        <ChannelSidebar />
        <ModalContainer />
        <Route path="/channels/:channelId" component={CurrentChannel}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainApp);
