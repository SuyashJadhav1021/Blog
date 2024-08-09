import React from "react";
import "./single.css";
import Sidebar from "../../Components/Sidebar";
import SinglePost from "../../Components/SinglePost";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
