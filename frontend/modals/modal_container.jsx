import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import CreateChannelForm from './create_channel_form_container';
import CreateDmForm from './create_dm_form_container';
import EditProfileForm from './edit_profile_form';
import FindChannelForm from './find_channel_form';

import { clearModal } from '../actions/modal_actions';
import { CREATE_CHANNEL_MODAL, CREATE_DM_MODAL, EDIT_PROFILE_MODAL, FIND_CHANNEL_MODAL } from '../actions/modal_actions';

const mapStateToProps = state => (
  { modal: state.ui.modal }
);

const mapDispatchToProps = dispatch => (
  { clearModal: () => dispatch(clearModal()) }
);

const ModalConductor = (props) => {

  switch (props.modal) {
    case CREATE_CHANNEL_MODAL:
      return (
        <div className='modal'>
          <button onClick={props.clearModal}>&#10005;</button>
          <CreateChannelForm history={props.history}/>
        </div>
      );
    case CREATE_DM_MODAL:
      return (
        <div className='modal'>
          <button onClick={props.clearModal}>&#10005;</button>
          <CreateDmForm history={props.history}/>
        </div>
      );
    case EDIT_PROFILE_MODAL:
    return (
      <div className='modal'>
        <button onClick={props.clearModal}>&#10005;</button>
        <EditProfileForm />
      </div>
    );
    case FIND_CHANNEL_MODAL:
    return (
      <div className='find-channel-modal'>
        <button onClick={props.clearModal}>&#10005;</button>
        <FindChannelForm />
      </div>
    )
    default:
      return null;
  }

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalConductor));
