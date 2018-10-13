import { SELECT_CHANNEL } from '../../actions/ui_actions';
import merge from 'lodash/merge';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_CHANNEL:
      return action.channel
    default:
      return state;
  }
}

export default uiReducer;
