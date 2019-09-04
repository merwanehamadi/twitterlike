import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';


export default class Handle extends Component {
  handleClick = () => {
    if (this.props.activeAccount === this.props.account1) {
      this.props.loadTweets('elonmusk');
    } else {
      this.props.loadTweets('realDonaldTrump');
    }
  }

  render() {
    return (
      <div id="handle" className="sticky">
        <a id="account1"
          href={this.props.activeAccount === 'realDonaldTrump' ? '#app' : '#'}
          onClick={this.props.activeAccount === 'realDonaldTrump' ? undefined : this.handleClick}
        >
        Trump
        </a>
        <a id="account2"
          href={this.props.activeAccount === 'elonmusk' ? '#app' : '#'}
          onClick={this.props.activeAccount === 'elonmusk' ? undefined : this.handleClick}
        >
        Elon Musk
        </a>
      </div>

    );
  }
}

Handle.propTypes = {
  activeAccount: PropTypes.string.isRequired,
  loadTweets: PropTypes.func.isRequired
};
