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
      <ul>
        {channelItems}
      </ul>
    )
  }
}

export default ChannelList;
