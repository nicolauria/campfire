import React from 'react';

class CreateChannelForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      private: props.private,
      direct_message: false,
      addedUsers: []
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
      <div className="form-errors">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
      );
    } else {
      return null;
    }

  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleUrlChange(response) {
    return this.props.history.push(`/channels/${response.channel.id}`)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state).then(response =>
      this.handleUrlChange(response)).then(() => this.props.clearModal());
  }

  render() {

    return (
      <div className="create-channel-form">
      <h1>Create A New Channel</h1>
      <p className="channel-instructions">Channels are where conversations live. They're best organized around a topic.
       Pick a name and description that fits your channel.</p>
      {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.update('name')}/><br />
          <input type="text"
            value={this.state.description}
            placeholder="Description"
            onChange={this.update('description')}/><br />
          <button className="session-submit">Create Channel</button>
        </form>
      </div>
    );
  }

}

export default CreateChannelForm;
