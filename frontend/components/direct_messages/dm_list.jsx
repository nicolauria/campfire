import React from 'react';
import DmItem from './dm_item_container';

class DMList extends React.Component {
  render() {
    const dms = Object.values(this.props.channels).filter(
      channel => channel.direct_message === true
    );

    const dm_items = dms.map(dm => {
      return <DmItem
              key={dm.id}
              dm={dm}/>
    });

    debugger
    return(
      <div className="direct-message-list">
        <h2 onClick={this.props.createDmModal}>Direct Messages &#x2295;</h2>
        <ul>
          {dm_items}
        </ul>
      </div>
    )
  }
}

export default DMList;
