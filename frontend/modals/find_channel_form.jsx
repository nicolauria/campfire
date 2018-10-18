import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ entities: { channels }}) => ({
  channels: Object.values(channels)
});

const mapDispatchToProps = dispatch => ({

});

class FindChannelForm extends React.Component {
  // go back and remove findChannelModal
  constructor(props) {
    super(props);
    this.state = {};
    this.state.currentSearch = '';
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({currentSearch: e.currentTarget.value});
  }

  clearState() {
    this.setState({currentSearch: ''});
  }

  channelResults() {
    if (this.state.currentSearch.length > 1) {
      const channelResults = this.props.channels.filter(channel => {
        return channel.name.includes(this.state.currentSearch);
      })
      return channelResults.map(channel => {
        return <div className="channel-form-search-result">
                <img src="http://funkyimg.com/i/2Ma9k.png"/>
                <Link to={`/channels/${channel.id}`}>
                {channel.name}</Link><br /></div>;
      })
    }
  }

  render() {
    let channelFormSearchResults = "channel-form-search-results"
    if (this.state.currentSearch.length < 2) {
      channelFormSearchResults = "no-channel-form-search-results"
    }

    return(
      <div>
        <input className="channel-search" type="text" placeholder="Search channels"
          onChange={this.handleInput}/>
        <div className={channelFormSearchResults}>
          {this.channelResults()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindChannelForm);
