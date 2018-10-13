import React from 'react';
import MessageItem from '../message/message_item_container';
import { createChannelSubscription } from '../../actions/channel_actions';
import ChannelForm from './channel_form_container';

class CurrentChannel extends React.Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.requestChannelMessages(this.props.match.params.channelId);
      this.props.createChannelSubscription(this.props.channel.id, this.props.receiveMessage);
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

    if (!this.props.channel) {
      return null; //pokedex
    }

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
        <ChannelForm />
      </div>
    )
  }
}

export default CurrentChannel;
