import { connect } from 'react-redux';
import CreateChannelForm from './create_channel_form';
import { createChannel } from '../actions/channel_actions';
import { clearModal } from '../actions/modal_actions';
import { clearErrors } from '../actions/session_actions';

const mapStateToProps = state => {
  return ({
  name: '',
  description: '',
  private: false,
  errors: state.errors.session
});
}

const mapDispatchToProps = dispatch => {
  return {
    formAction: (channel) => dispatch(createChannel(channel)),
    clearModal: () => dispatch(clearModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateChannelForm);
