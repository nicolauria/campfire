import { connect } from 'react-redux';
import CurrentChannel from './current_channel';
import { requestChannelMessages } from '../../actions/message_actions'

const mapStateToProps = state => {
  return {
    channel: state.entities.channels[state.entities.currentChannel.id] ||
      Object.values(state.entities.channels)[0],
    messages: Object.values(state.entities.messages)
  }
};

const mapDispatchToProps = dispatch => ({
  requestChannelMessages: id => dispatch(requestChannelMessages(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChannel);
