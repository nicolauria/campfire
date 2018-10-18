import {
  RECEIVE_ALL_CHANNELS } from '../../actions/channel_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import merge from "lodash/merge";

const allChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
    newState = {}
      action.channels.forEach(channel => {
        newState[channel.id] = channel
      });
      return newState
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default allChannelsReducer;
