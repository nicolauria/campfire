import React from 'react';
import { Link } from 'react-router-dom';

class DmItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const channel = this.props.dm;
    this.props.selectChannel(this.props.dm);
  }

  render() {
    return(
      <div>
        <Link onClick={this.handleSubmit}
              to={`/channels/${this.props.dm.id}`}>
              {this.props.dm.name}</Link><br />
      </div>
    )
  }
}

export default DmItem;
