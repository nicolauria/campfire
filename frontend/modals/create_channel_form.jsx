import React from 'react';

class CreateChannelForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      private: props.private,
      direct_message: false
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
    this.props.formAction(this.state);
    this.props.clearModal();
  }

  render() {

    return (
      <div className="create-channel-form">
      <h1>Create A New Channel</h1>
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
                  onClick={this.submit}>Create Channel</button>
        </form>
      </div>
    );
  }

}

export default CreateChannelForm;
