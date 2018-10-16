import { connect } from 'react-redux';
import CurrentChannel from './current_channel';
import { requestChannelMessages, receiveMessage } from '../../actions/message_actions';
import { createChannelSubscription } from '../../actions/channel_actions';
import { requestAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId

  return {
    channel: state.entities.channels[channelId] ||
      Object.values(state.entities.channels)[0],
    messages: Object.values(state.entities.messages)
  }
};

const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers()),
  requestChannelMessages: id => dispatch(requestChannelMessages(id)),
  createChannelSubscription: (channelId, receiveMessage) =>
    dispatch(createChannelSubscription(channelId, receiveMessage)),
  receiveMessage: message => dispatch(receiveMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChannel);
