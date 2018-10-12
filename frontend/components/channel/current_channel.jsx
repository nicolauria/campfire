import React from 'react';
import MessageItem from '../message/message_item_container';

class CurrentChannel extends React.Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.requestChannelMessages(this.props.match.params.channelId)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match) {
      if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
        this.props.requestChannelMessages(nextProps.match.params.channelId)
      }
    }
  }

  render() {
    let channelName = "Select A Channel";
    if (this.props.channel) {
      channelName = this.props.channel.name
    }

    const channelMessages = this.props.messages.map(message => {
      return <MessageItem
                key={message.id}
                message={message}/>
    });

    return(
      <div className="message-box">
        <h1>{channelName}</h1>
        <ul>
          {channelMessages}
        </ul>
      </div>
    )
  }
}

export default CurrentChannel;
