import React from 'react';
import ChannelList from './channel_list_container';
import DirectMessages from '../direct_messages/dm_list_container';

class ChannelSidebar extends React.Component {

  componentDidMount() {
    this.props.requestChannels();
  }

  render() {
    if (!this.props.currentUser) return null;

    const channels = Object.values(this.props.channels).filter(channel => {
      channel.direct_message === false;
    });

    console.log(channels);

    return(
      <div className="channel-sidebar">
        <h1 className="logged-in-username">{this.props.currentUser.username}</h1>
        <button className="sidebar-log-out" onClick={this.props.logOut}>Log Out</button>
        <h2>Channels</h2>
        <ChannelList />
        <h2>Direct Messages</h2>
        <DirectMessages />
      </div>
    )
  }
}

export default ChannelSidebar;
