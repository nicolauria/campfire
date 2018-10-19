import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestAllChannels, createBackendSubscription } from '../actions/channel_actions'

const mapStateToProps = ({ entities: { channels, allChannels }}) => ({
  channels: Object.values(channels),
  allChannels: Object.values(allChannels)
});

const mapDispatchToProps = dispatch => ({
  requestAllChannels: () => dispatch(requestAllChannels()),
  createBackendSubscription: channelId => dispatch(createBackendSubscription(channelId))
});

class FindChannelForm extends React.Component {
  // go back and remove findChannelModal
  constructor(props) {
    super(props);
    this.state = {};
    this.state.currentSearch = '';
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchFormResultsOn = this.searchFormResultsOn.bind(this);
    this.searchFormResultsOff = this.searchFormResultsOff.bind(this);
  }

  handleInput(e) {
    this.setState({currentSearch: e.currentTarget.value});
  }

  clearState() {
    this.setState({currentSearch: ''});
  }

  handleClick(channel) {
    return () => {
      const searchBar = document.getElementsByClassName("channel-form-search-results")[0]
      searchBar.classList.remove("channel-form-search-results");
      searchBar.classList.add("no-channel-form-search-results");
      this.props.createBackendSubscription(channel.id);
    }
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
                onClick={this.handleClick(channel)}>
                {channel.name}</Link><br /></div>;
      })
    } else {
      return this.props.allChannels.map(channel => {
        return <div className="channel-form-search-result">
                <img src="http://funkyimg.com/i/2Ma9k.png"/>
                <Link to={`/channels/${channel.id}`}
                onClick={this.handleClick(channel)}>
                {channel.name}</Link><br /></div>;
      })
    }
  }

  componentDidMount() {
    this.props.requestAllChannels();
  }

  searchFormResultsOn() {
    const searchBar = document.getElementsByClassName("no-channel-form-search-results")[0]
    searchBar.classList.remove("no-channel-form-search-results");
    searchBar.classList.add("channel-form-search-results");
  }

  searchFormResultsOff() {
    const searchBar = document.getElementsByClassName("channel-form-search-results")[0]
    searchBar.classList.remove("channel-form-search-results");
    searchBar.classList.add("no-channel-form-search-results");
  }

  render() {
    let channelFormSearchResults = "no-channel-form-search-results"

    // onBlur={this.searchFormResultsOff}
    return(
      <div>
        <input className="channel-search" type="text" placeholder="Search channels"
          onChange={this.handleInput} onFocus={this.searchFormResultsOn}/>
        <div className={channelFormSearchResults}>
          <div className="close-channels-search-box"
            onClick={this.searchFormResultsOff}>X</div>
          {this.channelResults()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindChannelForm);
