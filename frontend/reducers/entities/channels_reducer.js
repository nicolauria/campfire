import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
} from '../../actions/channel_actions';
import merge from "lodash/merge";

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNELS:
    newState = {}
      action.channels.forEach(channel => {
        newState[channel.id] = channel
      });
      return newState
    case RECEIVE_CHANNEL:
      return merge({}, state, {[action.channel.id]: action.channel})
    case REMOVE_CHANNEL:
      newState = merge({}, state)
      delete newState[action.channel.id]
      return newState;
    default:
      return state;
  }
}

export default channelsReducer;
