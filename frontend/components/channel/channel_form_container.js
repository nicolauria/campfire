import { connect } from 'react-redux';
import ChannelForm from './channel_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentChannel: ownProps.channel
});

export default connect(mapStateToProps)(ChannelForm);
