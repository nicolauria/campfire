import { combineReducers } from 'redux';

import users from './entities/users_reducer';
import channels from './entities/channels_reducer';

export default combineReducers({
  users,
  channels
});
