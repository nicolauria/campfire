import { connect } from 'react-redux';
import DMList from './dm_list';

const mapStateToProps = state => ({
  channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DMList);
