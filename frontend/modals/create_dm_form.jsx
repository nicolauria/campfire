import React from 'react';

class CreateDmForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: 'direct message',
      private: true,
      direct_message: true,
      search: '',
      userMatches: [],
      addedUsers: []
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    // this.allUserNames = this.allUserNames.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleInput(e) {
    this.setState({search: e.currentTarget.value}, () => this.selectedUsers());
  }

  selectedUsers() {
    let userMatches = this.props.users.filter(user => {
      return user.username.includes(this.state.search) && this.state.search.length > 1
    });
    this.setState({userMatches: Object.values(userMatches)})
  }

  addUser(user) {
    return () => {
      if (!this.state.addedUsers.includes(user)) {
        let joined = this.state.addedUsers.concat(user);
        this.setState({addedUsers: joined});
      }
    }
  }

  handleUrlChange(response) {
    return this.props.history.push(`/channels/${response.channel.id}`)
  }

  // allUserNames() {
  //   let userNames = [];
  //   this.state.addedUsers.forEach(user => {
  //     userNames.push(user.username);
  //   })
  //   return allUserNames.join(', ');
  // }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.addedUsers.length > 0) {
      this.state.name = this.state.addedUsers[0].username
      this.state.description = "direct message";
      this.props.createChannel(this.state).then(response =>
        this.handleUrlChange(response)).then(() => this.props.clearModal());
    }
  }

  clearUser(user) {
    return () => {
      let index = this.state.addedUsers.indexOf(user);
      let newArr = this.state.addedUsers;

      delete newArr[index];
      newArr = newArr.filter(el => el !== 'empty');
      this.setState({addedUsers: newArr});
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
        return <p onClick={this.addUser(match)}>
          <img className="profile-image" src={match.photoUrl}/>
          {match.username}</p>;
      });
      dmSearchResults = "dm-search-results";
    } else {
      userMatchesDiv = this.props.users.map(user => {
        return <p onClick={this.addUser(user)}>
          <img className="profile-image" src={user.photoUrl}/>
          {user.username}</p>;
      });
      dmSearchResults = "dm-search-results";
    }

    return (
      <div className="create-channel-form dm-form">
      <h1>Send a Direct Message</h1>
      <p className="channel-instructions">Find the name of the person you want to chat with.</p>
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
