import React from 'react';
import MessageItem from '../message/message_item_container';
import { createChannelSubscription } from '../../actions/channel_actions';
import ChannelForm from './channel_form_container';
import { Link } from 'react-router-dom';

class CurrentChannel extends React.Component {

  componentDidMount() {
    const channelId = this.props.match.params.channelId;
    // necessary bind?
    // const receiveMessage = this.props.receiveMessage.bind(this);
    if (this.props.match) {
      this.props.requestChannelMessages(channelId);
      // debugger
      this.props.createChannelSubscription(channelId, this.props.receiveMessage);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match) {
      if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
        this.props.requestChannelMessages(nextProps.match.params.channelId)
        this.props.createChannelSubscription(nextProps.match.params.channelId, this.props.receiveMessage);
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

    let channelMessages = this.props.messages.map(message => {
      return <MessageItem
                key={message.id}
                message={message}/>
    });

    if (this.props.messages.length === 0) {
      channelMessages = <div className="no-messages-here-yet">No messages here yet!</div>;
    }

    return(
      <div className="message-box">
        <h1>{channelName}</h1>
        <span className="channel-description">{this.props.channel.description}</span>
        <hr />
        <ul>
          {channelMessages}
        </ul>
        <ChannelForm channel={this.props.channel}/>
      </div>
    )
  }
}

export default CurrentChannel;
