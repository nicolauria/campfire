import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentChannel: ownProps.match.params.channelId
});

export default withRouter(connect(mapStateToProps)(ChannelForm));
