import { combineReducers } from 'redux';

import users from './entities/users_reducer';
import channels from './entities/channels_reducer';
import messages from './entities/messages_reducer';
import currentChannel from './entities/ui_reducer';

export default combineReducers({
  users,
  currentChannel,
  channels,
  messages,
});
