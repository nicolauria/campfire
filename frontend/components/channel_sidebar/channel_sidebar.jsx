import React from 'react';
import ChannelList from './channel_list_container';
import DirectMessages from '../direct_messages/dm_list_container';

class ChannelSidebar extends React.Component {

  componentDidMount() {
    this.props.requestChannels();
    this.props.requestAllUsers();
  }

  render() {
    if (!this.props.currentUser) return null;

    const channels = Object.values(this.props.channels).filter(channel => {
      channel.direct_message === false;
    });

    return(
      <div className="channel-sidebar">
        <h1 className="logged-in-username">{this.props.currentUser.username}</h1>
        <button className="sidebar-log-out" onClick={this.props.logOut}>Log Out</button>
        <ChannelList />
        <DirectMessages />
      </div>
    )
  }
}

export default ChannelSidebar;
