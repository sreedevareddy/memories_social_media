import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentID }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img
        className="card-image"
        onError={(event) => event.target.style.display = 'inline-block'}
        src={post.selectedFiles}
        alt=""
      />
      <div className="card-title-group">
        <h2 className="card-title">{post.title}</h2>
      </div>
      <span className="creator">--{post.name}</span>
      <div className="card-text">{post.message}</div>
      <div className="card-tags">{post.tags.map((tag) => `#${tag}`)}</div>
      <button onClick={() => dispatch(likePost(post._id))} className="btn like">
        Likes <b>{post.likeCount}</b>
      </button>
      <button
        onClick={() => dispatch(deletePost(post._id))}
        className="btn delete"
      >
        Delete
      </button>
      <button onClick={() => setCurrentID(post._id)} className="btn update">
        Update
      </button>
    </div>
  );
};

export default Post;
