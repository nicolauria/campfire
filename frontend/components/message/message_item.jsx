import React from 'react';

class MessageItem extends React.Component {
  render() {
    return(
      <li>
        {this.props.message.body}
      </li>
    )
  }
}

export default MessageItem;
