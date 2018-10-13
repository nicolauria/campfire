import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.body = '';
    this.state.user_id = props.currentUser.id
    this.state.channel_id = props.currentChannel.id

    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  update(e) {
    if (e.target.value !== "\n") {
     this.setState({ body: e.target.value });
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      debugger
      App[this.props.currentChannel.id].speak(this.state);
      this.setState({body: ''});
    }
  }

  render() {
    return (
        <form className='message-form'>
          <textarea value={this.state.body}
            onChange={this.update}
            onKeyPress={this.handleKeyPress}
            placeholder='Message'/>
        </form>
        );
  }
}

export default ChannelForm;
