import React from 'react';
import { Link } from 'react-router-dom';

class DmItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeChannel = this.removeChannel.bind(this);
  }

  handleSubmit() {
    const channel = this.props.dm;
    this.props.selectChannel(this.props.dm);
  }

  removeChannel() {
    this.props.deleteDm(this.props.dm.id)
  }

  render() {
    return(
      <div className="dm-item-container">
        <Link onClick={this.handleSubmit}
              to={`/channels/${this.props.dm.id}`}>
              # {this.props.dm.name}</Link>
              <div onClick={this.removeChannel}
                className="delete-dm">x</div><br />
      </div>
    )
  }
}

export default DmItem;
