import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestAllChannels } from '../actions/channel_actions'

const mapStateToProps = ({ entities: { channels, allChannels }}) => ({
  channels: Object.values(channels),
  allChannels: Object.values(allChannels)
});

const mapDispatchToProps = dispatch => ({
  requestAllChannels: () => dispatch(requestAllChannels())
});

class FindChannelForm extends React.Component {
  // go back and remove findChannelModal
  constructor(props) {
    super(props);
    this.state = {};
    this.state.currentSearch = '';
    this.handleInput = this.handleInput.bind(this);
    this.createChannelSubscription = this.createChannelSubscription.bind(this);
  }

  handleInput(e) {
    this.setState({currentSearch: e.currentTarget.value});
  }

  clearState() {
    this.setState({currentSearch: ''});
  }

  createChannelSubscription(channelId) {
    // debugger
    $.ajax({
      method: 'POST',
      url: '/api/subscriptions',
      data: {channelId: channelId}
    })
  }

  channelResults() {
    if (this.state.currentSearch.length > 1) {
      const channelResults = this.props.allChannels.filter(channel => {
        return channel.name.includes(this.state.currentSearch);
      })
      return channelResults.map(channel => {
        return <div className="channel-form-search-result">
                <img src="http://funkyimg.com/i/2Ma9k.png"/>
                <Link to={`/channels/${channel.id}`}
                onClick={this.createChannelSubscription(channel.id)}>
                {channel.name}</Link><br /></div>;
      })
    }
  }

  componentDidMount() {
    this.props.requestAllChannels();
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
