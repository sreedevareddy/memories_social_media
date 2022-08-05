import React from "react";
import "./styles.css";

const Post = ({ post, setCurrentID }) => {
  return (
    <div className="card">
      <img className="card-image" src={post.selectedFiles} alt="postimage" />
      <div className="card-title-group">
        <h2 className="card-title">{post.title}</h2>
      </div>
      <div className="card-text">{post.message}</div>
      <div className="card-tags">{post.tags.map((tag) => `#${tag}`)}</div>
      <span className="creator">--{post.creator}</span>
      <button className="btn like">
        Likes <b>{post.likeCount}</b>
      </button>
      <button className="btn delete">
        Delete
      </button>
      <button onClick={() => {setCurrentID(post._id)}} className="btn update">
        Update
      </button>
    </div>
  );
};

export default Post;
