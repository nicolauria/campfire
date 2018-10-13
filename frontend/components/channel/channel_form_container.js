import { connect } from 'react-redux';
import ChannelForm from './channel_form';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  currentChannel: state.entities.currentChannel
});

export default connect(mapStateToProps)(ChannelForm);
