import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { createChannelModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({
  createChannelModal: () => dispatch(createChannelModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);
