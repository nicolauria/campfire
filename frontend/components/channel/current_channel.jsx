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
    this.state = {
      toggled: true,
    }
    this.toggleSidebar = this.toggleSidebar.bind(this);
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
        this.props.requestChannels();
        this.props.requestChannelMessages(channelId)
          .then(() => this.props.createChannelSubscription(channelId, this.props.receiveMessage));
      }
    }
  }

  toggleSidebar() {
    debugger
    let channelSidebar = document.getElementById("user-list-sidebar");
    if (this.state.toggled === true) {
      channelSidebar.style.width = "0px";
      this.setState({toggled: false});
    } else {
      channelSidebar.style.width = "275px";
      this.setState({toggled: true});
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

    let channelUsers = ""
    if (this.props.channel.users) {
      channelUsers = this.props.channel.users.map(user => {
        return <li><img className="profile-image" src={user.photoUrl}/>{user.username}</li>
      });
    }

    return(
      <div className="message-box">
        <div className="channel-header">
          <img className="workspace-default-image" src="http://funkyimg.com/i/2Maio.jpg"/>
          <span className="channel-name-description">
            <h1>{channelName}</h1>
            <span className="channel-description">{this.props.channel.description}</span>
          </span>
          <FindChannelForm />
          <img className="info-button" src="http://funkyimg.com/i/2N5Qb.png" onClick={this.toggleSidebar}/>
        </div>
        <div className="outer-wrapper">
          <div className="message-container">
            <ul className="channel-messages" id="channel-messages">
              {channelMessages}
            </ul>
            <ChannelForm channel={this.props.channel}/>
          </div>
          <div id="user-list-sidebar" className="user-list-sidebar">
            <span className="channel-users">Channel Users</span>
            {channelUsers}
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentChannel;
