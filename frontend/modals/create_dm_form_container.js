import { connect } from 'react-redux';

import { clearModal } from '../actions/modal_actions';
import { createChannel } from '../actions/channel_actions';
import createDmForm from './create_dm_form';

const mapStateToProps = state => ({
  users: Object.values(state.entities.users),
});

const mapDispatchToProps = dispatch => {
  return {
    createChannel: (channel) =>
      dispatch(createChannel(channel)),
    clearModal: () => dispatch(clearModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createDmForm);
