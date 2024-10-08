import React from "react";
import "./posts.css";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Posts;
