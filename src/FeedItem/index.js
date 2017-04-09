import React, { PropTypes } from 'react';
import Moment from 'moment';
import './index.css';

const FeedItem = ({ imageUrl, nick, text, avatarUrl, time, typeInteraction, typeContent }) =>
  <div className="feed-item animated fadeIn">
    { (typeContent === 'image' && typeInteraction === 'creation') &&
      <img className="feedback-item-image" src={imageUrl} alt="Hashtag feed item" />
    }
    { (typeContent === 'image' && typeInteraction === 'like') && 
      <div className="image-interaction">
        <div className="image-like-container">
          <img className="image-like-container-img" src={imageUrl} alt="Hashtag feed item" />
          <svg className="image-like-container-illustration" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Heart" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" xmlSpace="preserve">
            <path fill="#FFFFFF" d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0  c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"/>
          </svg>
        </div>
        <div className="image-interaction-text">
          <span className="nick">A alguien le gusta la foto de @{nick}</span>
          <span className="time">{Moment(time*1000).fromNow()}</span>
        </div>
      </div>
    }
    { (typeInteraction === 'creation') &&
      <div>
        <div className="feed-item-content">
          {text}
        </div>
        <div className="feed-item-info">
          <img className="avatar" src={avatarUrl} alt={`${nick} avatar`} />
          <div className="info-container">
            <span className="nick">@{nick}</span>
            <span className="time">{Moment(time*1000).fromNow()}</span>
          </div>
        </div>
      </div>
    }
  </div>;

FeedItem.defaultProps = {
  avatarUrl: 'https://www.drupal.org/files/issues/default-avatar.png'
}

FeedItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  typeInteraction: PropTypes.string.isRequired,
  typeContent: PropTypes.string.isRequired
};

export default FeedItem;