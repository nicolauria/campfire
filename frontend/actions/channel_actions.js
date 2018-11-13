import * as ChannelAPIUtil from '../util/channel_api_util';
import { receiveMessage } from './message_actions';
import { receiveErrors } from './session_actions';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

const receiveChannel = channel => {
  return { type: RECEIVE_CHANNEL,
  channel }
};

const removeChannel = channel => {
  return {
    type: REMOVE_CHANNEL,
    channel
  }
}

export const requestChannels = () => dispatch => {
  return ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)))
};

export const requestAllChannels = () => dispatch => {
  return ChannelAPIUtil.fetchAllChannels()
    .then(channels => dispatch(receiveAllChannels(channels)))
}

export const requestChannel = id => dispatch => (
  ChannelAPIUtil.fetchChannel()
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = channel => dispatch => {
  return ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const updateChannel = channel => dispatch => (
  ChannelAPIUtil.updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = id => dispatch => {
  return ChannelAPIUtil.removeChannel(id)
    .then(channel => dispatch(removeChannel(channel)))
};

export const createBackendSubscription = channelId => dispatch => {
  return ChannelAPIUtil.createSubscription(channelId)
    .then(channel => dispatch(receiveChannel(channel)))
}

function updateScroll() {
  var element = document.getElementById("channel-messages");
  element.scrollTop = element.scrollTop + 50;
}

// this is the frontend websockets connection
export const createChannelSubscription = (channelId, receiveMessage) => dispatch => {
  App[channelId] = App.cable.subscriptions.create(
    {channel: "MainChannel", id: channelId},
    {
      received: function(data) {
        const message = JSON.parse(data.message);
        receiveMessage(message);
        updateScroll();
      },
      speak: function(message) {
        return this.perform('speak', { message });
      }
  })
}
