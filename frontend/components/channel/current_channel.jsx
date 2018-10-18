import React from 'react';
import MessageItem from '../message/message_item_container';
import { createChannelSubscription } from '../../actions/channel_actions';
import ChannelForm from './channel_form_container';
import { Link } from 'react-router-dom';
import NoChannelsYet from '../main_app/no_channels_yet_container';
import FindChannelForm from '../../modals/find_channel_form';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: true
    // }
  }

  componentDidMount() {
    const channelId = this.props.match.params.channelId;
    this.props.requestChannelMessages(channelId)
      .then(() => this.props.createChannelSubscription(channelId, this.props.receiveMessage));
  }

  componentWillReceiveProps(nextProps) {
    const channelId = nextProps.match.params.channelId;
    if (this.props.match) {
      if (this.props.match.params.channelId !== channelId) {
        // this.props.requestAllUsers().then(() =>
        this.props.requestChannelMessages(channelId)
          .then(() => this.props.createChannelSubscription(channelId, this.props.receiveMessage));
      }
    }
  }

  render() {
    let channelName = "Select A Channel";

    if (!this.props.channel) {
      return null;
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
        <div className="channel-header">
          <img className="workspace-default-image" src="http://funkyimg.com/i/2Maio.jpg"/>
          <h1>{channelName}</h1>
          <span className="channel-description">{this.props.channel.description}</span>
          <FindChannelForm />
        </div>
        <ul>
          {channelMessages}
        </ul>
        <ChannelForm channel={this.props.channel}/>
      </div>
    )
  }
}

export default CurrentChannel;
