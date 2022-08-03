import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return posts.length ? (
    <div className="container grid posts">
      {posts.map((post) => (
        <div key={post._id} className="grid postitems">
          <div className="post">
            <Post post={post} />
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
