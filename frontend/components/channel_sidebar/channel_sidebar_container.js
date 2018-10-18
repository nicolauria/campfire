import { connect } from 'react-redux';
import ChannelSidebar from './channel_sidebar';
import { requestChannels } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';
import { requestAllUsers } from '../../actions/user_actions';
import { editProfileModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { requestChannelMessages } from '../../actions/message_actions';

const mapStateToProps = ({ session, entities: { users, channels }}) => ({
  channels: Object.values(channels),
  currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
  requestChannels: () => dispatch(requestChannels()),
  logOut: () => dispatch(logout()),
  requestAllUsers: () => dispatch(requestAllUsers()),
  editProfileModal: () => dispatch(editProfileModal()),
  requestChannelMessages: (channelId) => dispatch(requestChannelMessages(channelId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelSidebar));
