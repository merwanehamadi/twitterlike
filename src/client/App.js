import React, { Component } from 'react';
import TweetList from './TweetList';
import Handle from './Handle';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      active_account: '',
      account1: 'realDonaldTrump',
      account2: 'elonmusk',
    };
    this.fetchTweets(this.state.account1);
  }

  componentDidUpdate() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  loadTweets = (id) => {
    this.fetchTweets(id);
  }

  fetchTweets = (accountName) => {
    fetch(`http://localhost:8080/${accountName}`)
      .then(res => res.json())
      .then(result => this.setState({ tweets: result, active_account: accountName }));
  }

  fetchMoreTweets = () => {
    const length = (this.state.tweets.length);
    const lastId = this.state.tweets[length-1].id;
    fetch(`http://localhost:8080/${this.state.active_account}?max_id=${lastId}`)
      .then(res => res.json())
      .then(result => this.setState({
        tweets: this.state.tweets.concat(result.slice(1, result.length))
      }));
  };

trackScrolling = () => {
  const wrappedElement = document.getElementById('root');
  if (this.isBottom(wrappedElement)) {
    const length = (this.state.tweets.length);
    this.fetchMoreTweets();
    document.removeEventListener('scroll', this.trackScrolling);
  }
};

isBottom(el) {
  return el.getBoundingClientRect().bottom <= window.innerHeight;
}

render() {
  return (
    <div id="app">
      <Handle
        loadTweets={this.loadTweets}
        activeAccount={this.state.active_account}
        account1={this.state.account1}
        account2={this.state.account2}
      />
      <TweetList tweets={this.state.tweets} />
    </div>
  );
}
}
