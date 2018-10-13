import React from 'react';
import { Link } from 'react-router-dom';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const channel = this.props.channel;
    this.props.selectChannel(channel);
  }

  render() {
    return(
      <Link onClick={this.handleSubmit} to={`/channels/${this.props.channel.id}`}>{this.props.channel.name}</Link>
    )
  }
}

export default ChannelListItem;
