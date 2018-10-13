import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';
import { selectChannel } from '../../actions/ui_actions.js';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  selectChannel: channel => dispatch(selectChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);
