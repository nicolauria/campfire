import { connect } from 'react-redux';
import ChannelSidebar from './channel_sidebar';
import { requestChannels } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';
import { requestAllUsers } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities: { users, channels }}) => ({
  channels: Object.values(channels),
  currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
  requestChannels: () => dispatch(requestChannels()),
  logOut: () => dispatch(logout()),
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSidebar);
