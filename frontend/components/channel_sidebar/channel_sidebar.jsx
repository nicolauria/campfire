import React from 'react';
import ChannelList from './channel_list_container';
import DirectMessages from '../direct_messages/dm_list_container';

class ChannelSidebar extends React.Component {

  componentDidMount() {
    // this.props.requestChannels().then(() => this.props.requestAllUsers());

    this.props.requestAllUsers().then(() => this.props.requestChannels())
      .then((res) => {
        // console.log(res.channels[0])
        this.props.history.push(`/channels/${res.channels[0]}`)
      })
      // .then(() => this.props.requestChannelMessages(channelId)
  }

  // componentWillReceiveProps(nextProps) {
  //   // debugger
  //   // if (this.props.match.params !== nextProps.match.params) {
  //   //   if (nextProps.channels.length > 0) {
  //   //     debugger
  //   //     if (nextProps.match.params.length > 1) {
  //   //       const channelId = nextProps.match.params.channelId
  //   //       nextProps.history.push(`/channels/${channelId}`)
  //   //     } else {
  //   //       debugger
  //   //       const channelId = nextProps.channels[0].id
  //   //       nextProps.history.push(`/channels/${channelId}`)
  //   //     }
  //   //   }
  //   }
  // }

  render() {
    if (!this.props.currentUser) return null;

    const channels = Object.values(this.props.channels).filter(channel => {
      channel.direct_message === false;
    });

    return(
      <div className="channel-sidebar">
        <div className="user-profile-info">

          <h1 className="logged-in-username">{this.props.currentUser.username}</h1>
          <button className="sidebar-log-out" onClick={this.props.logOut}>
             Log Out</button>
          <button className="edit-profile-button"
            onClick={this.props.editProfileModal}>Edit Profile</button>
          </div>
        <ChannelList />
        <DirectMessages />
      </div>
    )
  }
}

export default ChannelSidebar;
