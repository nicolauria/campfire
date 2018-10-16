import { connect } from 'react-redux';
import MessageItem from './message_item';

const mapStateToProps = ({session, entities: { users }}) => ({
  users: users,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);
