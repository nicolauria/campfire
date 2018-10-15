import { connect } from 'react-redux';
import DMList from './dm_list';
import { createDmModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({
  createDmModal: () => dispatch(createDmModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(DMList);
