import {
  RECEIVE_MESSAGE,
  RECEIVE_CHANNEL_MESSAGES
} from '../../actions/message_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import merge from "lodash/merge";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      let newState = merge({}, state);
      return merge(newState, {[action.message.id]: action.message})
    case RECEIVE_CHANNEL_MESSAGES:
      return action.messages
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default messagesReducer;
