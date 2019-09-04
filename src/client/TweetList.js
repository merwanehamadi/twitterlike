import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

export default class TweetList extends Component {
  renderList = () => {
    return this.props.tweets.map((tweet) => {
      return (<Tweet
        full_text={tweet.full_text}
        key={tweet.id}
        created_at={tweet.created_at}
        profile_image_url={tweet.user.profile_image_url}
      />);
    });
  };

  render() {
    return (
      <div>
        <div className="tweet-list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      full_text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired
    })
  ),
};
