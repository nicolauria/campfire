import React from 'react';

import MainNavbar from './main_navbar_container';
import MessageList from './message_list_container';
import MessageForm from './message_form_container';

const Messenger = (props) => {
  return (
    <div className='messenger'>
      <MainNavbar />
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default Messenger;
