import React from 'react';

class CreateDmForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      private: true,
      direct_message: true,
      search: '',
      userMatches: [],
      addedUsers: []
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

  handleInput(e) {
    debugger
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
    let userMatches = this.props.users.filter(user => {
      return user.username.includes(this.state.search) && this.state.search.length > 1
    });
    this.setState({userMatches: userMatches})
  }

  addUser(user) {
    return () => {
      if (!this.state.addedUsers.includes(user)) {
        let joined = this.state.addedUsers.concat(user);
        this.setState({addedUsers: joined});
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.addedUsers.length > 0) {
      this.state.name = this.state.addedUsers[0].username
      this.props.createChannel(this.state);
      this.props.clearModal();
    }
  }

  clearUser(user) {
    return () => {
      // debugger
      delete this.state.addedUsers[user];
    }
  }

  render() {
    let addedUsersDiv = null;
    if (this.state.addedUsers.length > 0) {
      addedUsersDiv = this.state.addedUsers.map(user => {
        return <span className="added-dm-user" onClick={this.clearUser(user)}>
          {user.username} x</span>
      });
    }

    let userMatchesDiv = null;
    let dmSearchResults = "dm-search-results-empty";

    if (this.state.userMatches.length > 0) {
      userMatchesDiv = this.state.userMatches.map(match => {
        return <p onClick={this.addUser(match)}>{match.username}</p>;
      });
      dmSearchResults = "dm-search-results";
    }

    return (
      <div className="create-channel-form dm-form">
      <h1>Send a Direct Message</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Search users"
            onChange={this.handleInput}
            value={this.state.search}/><br />
          <div className="added-users-div">{addedUsersDiv}</div>
          <div className={dmSearchResults}>
            {userMatchesDiv}
          </div>
          <button className="session-submit">Send Message</button>
        </form>
      </div>
    );
  }

}

export default CreateDmForm;
