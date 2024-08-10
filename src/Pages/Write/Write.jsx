import React, { useContext, useRef, useState } from "react";
import "./write.css";
import { Context } from "../context/context";
import axios from "axios";
function Write() {
  const titleRef = useRef();
  const descRef = useRef();
  const [file, setFile] = useState(null);
  const { newToken, newUser } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      username: newUser.username,
    };
    if (file) {
      const fileData = new FormData();
      const filename = Date.now() + file.name;
      fileData.append("name", filename);
      fileData.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(`${process.env.REACT_APP_BASEURL}/upload`, fileData);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASEURL}/posts`,
        newPost,
        {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        }
      );
      window.location.replace("/post/" + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      <div className="write-container">
        <h1 className="write-title">Publish your passions,your way</h1>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="post"
            className="writeImg"
          />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="formFields">
            <label htmlFor="writeFile">
              <i class="write-icon fa-solid fa-plus"></i>
            </label>
            <input
              type="file"
              id="writeFile"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              className="writeInput"
              placeholder="Title"
              autoFocus={true}
              ref={titleRef}
            />
          </div>
          <div className="formFields">
            <textarea
              rows={10}
              cols={50}
              className="writeInput writeText"
              type="text"
              placeholder="Write your story...."
              ref={descRef}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
