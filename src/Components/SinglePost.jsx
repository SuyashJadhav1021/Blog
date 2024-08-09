import React, { useContext, useEffect, useRef, useState } from "react";
import "./singlePost.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../Pages/context/context";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { newUser, newToken } = useContext(Context);
  const [upload, setUpload] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const PF = "https://bloggify-w5po.onrender.com/images/";
  const fetchPost = async () => {
    const res = await axios.get(`/posts/${id}`);
    setPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
  };
  useEffect(() => {
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `/posts/${id}`,

        {
          headers: {
            Authorization: `Bearer ${newToken}`,
            username: post.username,
          },
        }
      );
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    const updateData = {
      title,
      desc,
      username: post.username,
    };
    try {
      await axios.put(`/posts/${id}`, updateData, {
        headers: {
          Authorization: `Bearer ${newToken}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlePost">
      <div className="post-wrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="post" className="singlepost-img" />
        )}
        {upload ? (
          <>
            <i
              class="edit-icon fa-solid fa-pen-to-square"
              onClick={() => setUpload(!upload)}
            ></i>
            <input
              type="text"
              className="edit-input"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              rows={15}
              cols={50}
              className="edit-input write-edit-input"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button className="edit-button" onClick={handleUpdate}>
              Edit
            </button>
          </>
        ) : (
          <>
            <h1 className="singlepost-title">{post.title}</h1>
            <div className="singlepost-info">
              <div className="singlepost-details">
                <div className="author-info">
                  <Link to={`/?username=${post.username}`}>
                    <span className="author-info">Author:{post.username}</span>
                  </Link>
                  <span className="singlepost-time">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                </div>

                {post.username === newUser?.username && (
                  <div className="singlep-icons">
                    <i
                      class="edit fa-solid fa-pen-to-square"
                      onClick={() => setUpload(!upload)}
                    ></i>

                    <i
                      class="trash fa-solid fa-trash"
                      onClick={handleDelete}
                    ></i>
                  </div>
                )}
              </div>
              <div className="singlepost-desc">{post.desc}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
