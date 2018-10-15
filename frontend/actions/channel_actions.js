import * as ChannelAPIUtil from '../util/channel_api_util';
import { receiveMessage } from './message_actions';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const removeChannel = channel => ({
  type: REMOVE_CHANNEL,
  channel
})

export const requestChannels = () => dispatch => {
  return ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)))
};

export const requestChannel = id => dispatch => (
  ChannelAPIUtil.fetchChannel()
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = channel => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const updateChannel = channel => dispatch => (
  ChannelAPIUtil.updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = id => dispatch => (
  ChannelAPIUtil.removeChannel(id)
    .then(channel => dispatch(removeChannel(channel)))
);

export const createChannelSubscription = (channelId, receiveMessage) => dispatch => {
  App[channelId] = App.cable.subscriptions.create(
    {channel: "MainChannel", id: channelId},
    {
      received: function(data) {
        const message = JSON.parse(data.message);
        receiveMessage(message);
      },
      speak: function(message) {
        return this.perform('speak', { message });
      }
  })
}
