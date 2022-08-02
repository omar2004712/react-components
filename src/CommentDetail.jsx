/* eslint-disable react/prop-types */
import React from 'react';

function CommentDetail({ author, timeAgo, avatar, text }) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default CommentDetail;
