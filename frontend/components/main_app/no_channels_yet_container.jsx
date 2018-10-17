import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createChannelModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createChannelModal: () => dispatch(createChannelModal())
});

class NoChannelsYet extends React.Component {
  
  render() {
    return(
      <div className="no-channels-yet">
        <h1>You don't have any channels yet</h1>
        <p onClick={this.props.createChannelModal}>Join or create one here</p>
        <img src="http://funkyimg.com/i/2Maio.jpg"/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoChannelsYet);
