import React from 'react';
import ChannelList from './channel_list_container';
import DirectMessages from '../direct_messages/dm_list_container';

class ChannelSidebar extends React.Component {

  componentDidMount() {
    this.props.requestChannels();
  }

  render() {

    const channels = Object.values(this.props.channels).filter(channel => {
      channel.direct_message === false;
    });

    console.log(channels);

    return(
      <div>
        <h1>Welcome {this.props.currentUser.username}!</h1>
        <h2>Channels</h2>
        <ChannelList />
        <h2>Direct Messages</h2>
        <DirectMessages />
      </div>
    )
  }
}

export default ChannelSidebar;
