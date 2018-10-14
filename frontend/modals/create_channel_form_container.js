import { connect } from 'react-redux';

import CreateChannelForm from './create_channel_form';
import { createChannel } from '../actions/channel_actions';
import { clearModal } from '../actions/modal_actions';

const mapStateToProps = state => {
  return ({
  name: '',
  description: '',
  private: false,
});
}

const mapDispatchToProps = dispatch => {
  return {
    formAction: (channel) => dispatch(createChannel(channel)),
    clearModal: () => dispatch(clearModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateChannelForm);
