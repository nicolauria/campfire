import { connect } from 'react-redux';
import ChannelSidebar from './channel_sidebar';

const mapStateToProps = ({ session, entities: { users, channels }}) => ({
  currentUser: users[session.id],
  channels: Object.values(channels)
})

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSidebar);
