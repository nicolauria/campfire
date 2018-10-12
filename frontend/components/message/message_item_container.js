import { connect } from 'react-redux';
import MessageItem from './message_item';

const mapStateToProps = ({entities: { users }}) => ({
  users: users
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);
