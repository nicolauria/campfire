export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
import * as ChannelAPIUtil from '../util/message_api_util';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

const receiveChannelMessages = messages => ({
  type: RECEIVE_CHANNEL_MESSAGES,
  messages
});

export const requestChannelMessages = channelId => dispatch => (
  ChannelAPIUtil.requestChannelMessages(channelId)
    .then(messages => dispatch(receiveChannelMessages(messages)))
)
