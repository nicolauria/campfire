import React from 'react';
import { updateUser, clearErrors } from '../../actions/session_actions'

const mapStateToProps = state => ({
  errors: errors.session,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearErrors())
})

class EditProfileForm extends React.Component {
  constructor(props) {
    this.state = {}
    this.state.username = currentUser.username;
    this.state.email = currentUser.email;
    this.state.password = "";
    this.state.photoFile = null;
    this.state.photoUrl = null;
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
    const user = Object.assign({}, this.state);
    this.props.updateUser(user);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return(
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
        <input type="file"
          onChange={this.handleFile.bind(this)}/>
        <h3>Image Preview</h3>
        {preview}
        <button>Update User</button>
      </form>
    )
  }
}
