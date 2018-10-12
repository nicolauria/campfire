import {
  RECEIVE_CHANNEL_MESSAGES
} from '../../actions/message_actions';
import merge from "lodash/merge";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_MESSAGES:
      return action.messages
    default:
      return state;
  }
}

export default messagesReducer;
