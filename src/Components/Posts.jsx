import React from "react";
import "./posts.css";
import Post from "./Post";

function Posts({ posts }) {
  console.log("prop:", posts);
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Posts;
