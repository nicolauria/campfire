import React from 'react';
import ChannelListItem from './channel_list_item_container';

class ChannelList extends React.Component {

  render() {
    const channels = Object.values(this.props.channels).filter(
      channel => channel.direct_message === false
    );

    const channelItems = channels.map(channel => {
      return <ChannelListItem
                key={channel.id}
                channel={channel}/>
    });

    return(
      <div className="channel-list">
        <h2 onClick={this.props.createChannelModal}>Channels &#x2295;</h2>
        <ul>
          {channelItems}
        </ul>
      </div>
    )
  }
}

export default ChannelList;
