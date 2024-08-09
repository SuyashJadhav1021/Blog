import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../Components/Header";
import Posts from "../../Components/Posts";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function Home() {
  const { search } = useLocation();

  const [post, setPost] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("/posts" + search);
    setPost(res.data.post);
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={post} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
