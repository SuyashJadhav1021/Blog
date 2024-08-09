import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "https://bloggify-w5po.onrender.com/images/";
  return (
    <div className="post">
      {post.photo && (
        <img src={PF + post.photo} alt="post" className="post-img" />
      )}

      <div className="post-info">
        <Link to={`/post/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>
        <div className="desc">{post.desc}</div>
        <div className="post-cats">
          {post.categories.map((cat) => (
            <span className="postcat">{cat.name}</span>
          ))}
        </div>

        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}

export default Post;
