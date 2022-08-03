import React from "react";
import "./styles.css";

const Post = ({post}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{post.creator}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{post.title}</h5>
        </div>
      </div>
      <img className="card-image" src={post.selectedFiles} alt="Logo" />
      <div className="card-text">{post.message}</div>
      <div className="card-like-bar">
        Like {!post.likeCount ? (
          <img className="card-like-icon" src="https://img.icons8.com/ios/344/like--v1.png" alt="Logo" />
        ) : (
          <img className="card-like-icon" src="https://img.icons8.com/ios-filled/344/like--v1.png" alt="Logo" />
        )}
        <div className="like-text">
          <b>{post.likeCount}</b>
        </div>
        <div>
          {post.tags.map((tag) => (
            `#${tag}`
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
