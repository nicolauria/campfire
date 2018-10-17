import React from 'react';
import { connect } from 'react-redux';
import ChannelSidebar from '../channel_sidebar/channel_sidebar_container';
import ModalContainer from '../../modals/modal_container';
import NoChannelsYet from './no_channels_yet_container';
import CurrentChannel from '../channel/current_channel_container';
import { Route } from 'react-router-dom';
import SplashPage from './splash_page';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
})

class MainApp extends React.Component {
  renderContent() {
    if (!this.props.currentUser) return <SplashPage />;
    return (<div className="main">
      <ChannelSidebar />
      <ModalContainer />
      <NoChannelsYet />
      <Route path="/channels/:channelId" component={CurrentChannel}/>
    </div>)
  }

  render() {
    return (
      <div>
      {this.renderContent()}
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainApp);
