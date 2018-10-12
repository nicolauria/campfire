import React from 'react';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    this.time = this.calculateDate(this.props.message.created_at)
  }

  calculateDate(created_at) {
    const date = new Date(created_at);
    let hours = date.getHours();

    const ampm = hours < 12 ? 'AM' : 'PM'
    hours = hours % 12;
    if (hours === 0) hours = 12;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Super-secret-special-day'];
    return days[date.getDay()] + ', ' + hours + ':' + minutes + ampm;
  }

  render() {
    return(
      <li>
        <span className="message-author">
          {this.props.users[this.props.message.user_id].username}
        </span>
        <span className="message-timestamp">{this.time}</span>
        <br />
        {this.props.message.body}
      </li>
    )
  }
}

export default MessageItem;
