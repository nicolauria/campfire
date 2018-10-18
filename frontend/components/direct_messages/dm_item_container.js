import { connect } from 'react-redux';
import DmItem from './dm_item';
import { selectChannel } from '../../actions/ui_actions.js';
import { deleteChannel } from '../../actions/channel_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  selectChannel: channel => dispatch(selectChannel(channel)),
  deleteDm: dmId => dispatch(deleteChannel(dmId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DmItem);
