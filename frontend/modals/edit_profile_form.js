import React from 'react';
import { connect } from 'react-redux';
import { updateUser, clearErrors } from '../actions/session_actions';
import { clearModal } from '../actions/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearErrors()),
  clearModal: () => dispatch(clearModal())
})

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      photo: null,
      // photoUrl: null
    }
    this.state.username = this.props.currentUser.username;
    this.state.email = this.props.currentUser.email;
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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('user[username]', this.state.username)
    // formData.append('user[email]', this.state.email)
    // formData.append('user[password]', this.state.password)
    // debugger
    //
    // if (this.state.photoFile) {
    //   formData.append('user'[photo], this.state.photo)
    // }

    this.props.updateUser(this.state);
    this.props.clearModal();
  }

  handleFile(e) {
    // debugger
    const file = e.currentTarget.files[0];
    this.setState({photo: file});
    // const fileReader = new FileReader();
    // fileReader.onloadend = () => {
    //
    //   this.setState({photoFile: file, photoUrl: fileReader.result});
    // };
    // if (file) {
    //   fileReader.readAsDataURL(file);
    // }
  }

  render() {
    // const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return(
      <div className="edit-profile-form">
      <h1>Edit User Profile</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            placeholder="username"
          />
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="username"
          />
          <input type="password"
            onChange={this.update('password')}
            className="login-input"
            placeholder="password"
          />
          <input className="file-submit-button" type="file"
            onChange={this.handleFile.bind(this)}/><br />
          <button className="session-submit">Update User</button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
