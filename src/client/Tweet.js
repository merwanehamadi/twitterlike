import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Tweet extends Component {
  render() {
    return (
      <div>
        <div className="notification">
          <img alt="" src={this.props.profile_image_url} className="avatar-large" />
          <div className="notification-content">
            <p><small>{this.props.created_at}</small></p>
            <p>{this.props.full_text}</p>
          </div>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  profile_image_url: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  full_text: PropTypes.string.isRequired
};
