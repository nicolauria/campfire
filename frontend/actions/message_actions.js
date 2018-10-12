export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';
import * as ChannelAPIUtil from '../util/message_api_util';

const receiveChannelMessages = messages => ({
  type: RECEIVE_CHANNEL_MESSAGES,
  messages
});

export const requestChannelMessages = channelId => dispatch => (
  ChannelAPIUtil.requestChannelMessages(channelId)
    .then(messages => dispatch(receiveChannelMessages(messages)))
)
