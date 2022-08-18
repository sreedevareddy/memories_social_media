import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import './styles.css';

const Posts = ({setCurrentID}) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return posts.length ? (
    <div className="posts">
      {posts.map((post) => (
        <div key={post._id} className="postitems">
          <div className="post">
            <Post post={post} setCurrentID={setCurrentID} />
          </div>
        </div>
      ))
    }
    </div>
  ) : (
    <div></div>
  );
};

export default Posts;
