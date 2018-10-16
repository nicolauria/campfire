import React from 'react';

class CreateDmForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      private: props.private,
      direct_message: true,
      search: '',
      userMatches: []
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.selectedUsers = this.selectedUsers.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state);
    this.props.clearModal();
  }

  handleInput(e) {
    this.setState({search: e.currentTarget.value}, () => this.selectedUsers());

    // if (this.timeout) {
    //   clearTimeout(this.timeout);
    // }
    // this.setState({search: e.target.value},
    //   () => this.timeout = setTimeout(() => {
    //     this.props.searchUsers(this.state.search).then(
    //     () => this.setState({searchedUsers: this.props.searchedUsers}));
    //   }, 500)
    // );
  }

  selectedUsers() {
    // debugger
    let userMatches = this.props.users.filter(user => {
      return user.username.includes(this.state.search)
    });
    this.setState({userMatches: userMatches})
  }

  render() {
    return (
      <div className="create-channel-form">
      <h1>Send a Direct Message</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.update('name')}/><br />
          <input type="text"
            value={this.state.description}
            placeholder="description"
            onChange={this.update('description')}/><br />
          <input type="text"
            placeholder="Search users"
            onChange={this.handleInput}
            value={this.state.search}/><br />
            {this.state.userMatches.map(match => {
              return <li>{match.username}</li>;
            })}
          <button className="session-submit">Send Message</button>
        </form>
      </div>
    );
  }

}

export default CreateDmForm;
