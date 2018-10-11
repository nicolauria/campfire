import React from 'react';

class ChannelSidebar extends React.Component {

  // renderChannelNames() {
  //   debugger;
  //   if (this.props.channels.name || this.props.channels.length === 0) return null;
  //   const channel_names = this.props.channels.map(channel => {
  //     return channel.name
  //   });
  //   return channel_names;
  // }

  render() {
    const channels = this.props.channels.map(channel => {
      return channel.name;
    })

    return(
      <div>
        <h1>Welcome {this.props.currentUser.username}!</h1>
        {channels}
      </div>
    )
  }
}

export default ChannelSidebar;
