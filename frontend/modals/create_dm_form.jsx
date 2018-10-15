import React from 'react';
import { connect } from 'react-redux';

import { clearModal } from '../actions/modal_actions';
import { createChannel } from '../actions/channel_actions';


const mapStateToProps = state => ({
  name: '',
  description: '',
  private: true,
});

const mapDispatchToProps = dispatch => {
  return {
    createChannel: (channel) =>
      dispatch(createChannel(channel)),
    clearModal: () => dispatch(clearModal()),
  };
};

class CreateDmForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      private: props.private,
      direct_message: true
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  submit(e) {
    e.preventDefault();
    this.props.createChannel(this.state);
    this.props.clearModal();
  }

  render() {
    return (
      <div className="create-channel-form">
      <h1>Send a Direct Message</h1>
        <form onSubmit={this.submit}>
          <input type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.update('name')}/><br />
          <input type="text"
            value={this.state.description}
            placeholder="description"
            onChange={this.update('description')}/><br />
          <button className="session-submit"
                  onClick={this.submit}>Send Message</button>
        </form>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDmForm);
