import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.body = '';
    this.state.user_id = props.currentUser.id;
    this.state.channel_id = parseInt(props.currentChannel);

    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.channel_id !== parseInt(newProps.currentChannel)) {
      this.setState({channel_id: parseInt(newProps.currentChannel)})
    }
  }

  update(e) {
    if (e.target.value !== "\n") {
     this.setState({ body: e.target.value });
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      App[parseInt(this.props.currentChannel)].speak(this.state);
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
