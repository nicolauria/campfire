import { connect } from 'react-redux';
import ChannelSidebar from './channel_sidebar';
import { requestChannels } from '../../actions/channel_actions';

const mapStateToProps = ({ session, entities: { users, channels }}) => ({
  currentUser: users[session.id],
  channels: Object.values(channels)
})

const mapDispatchToProps = dispatch => ({
  requestChannels: () => dispatch(requestChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSidebar);
