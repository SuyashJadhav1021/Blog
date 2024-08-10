import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import Header from "../../Components/Header";
import Posts from "../../Components/Posts";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";
import { Context } from "../context/context";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

function Home() {
  const { search } = useLocation();
  const { loading, setLoading } = useContext(Context);
  const [post, setPost] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(
      `${process.env.REACT_APP_BASEURL}/posts` + search
    );
    setLoading(false);
    setPost(res.data.post);
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="home">
            <Posts posts={post} />
            <Sidebar />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
