import { combineReducers } from 'redux';

import users from './entities/users_reducer';
import channels from './entities/channels_reducer';
import allChannels from './entities/all_channels_reducer';
import messages from './entities/messages_reducer';

export default combineReducers({
  users,
  channels,
  allChannels,
  messages,
});
