import { CREATE_CHANNEL_MODAL,
  CREATE_DM_MODAL,
  CLEAR_MODAL,
  EDIT_PROFILE_MODAL } from '../../actions/modal_actions.js';

import { RECEIVE_CHANNEL } from '../../actions/channel_actions.js';

const ModalReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_CHANNEL_MODAL:
      return CREATE_CHANNEL_MODAL;
    case CREATE_DM_MODAL:
      return CREATE_DM_MODAL;
    case CLEAR_MODAL:
    case RECEIVE_CHANNEL:
      return null;
    case EDIT_PROFILE_MODAL:
      return EDIT_PROFILE_MODAL;
    default:
      return state;
  }
};

export default ModalReducer;
