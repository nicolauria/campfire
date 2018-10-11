import { connect } from 'react-redux';
import ChannelList from './channel_list';

const mapStateToProps = state => ({
  channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);
