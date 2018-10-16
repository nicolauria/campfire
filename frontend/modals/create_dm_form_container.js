import { connect } from 'react-redux';

import { clearModal } from '../actions/modal_actions';
import { createChannel } from '../actions/channel_actions';
import createDmForm from './create_dm_form';

const mapStateToProps = state => ({
  name: '',
  description: '',
  private: true,
  users: Object.values(state.entities.users),
  userMatches: ''
});

const mapDispatchToProps = dispatch => {
  return {
    createChannel: (channel) =>
      dispatch(createChannel(channel)),
    clearModal: () => dispatch(clearModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createDmForm);
