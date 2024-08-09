import Navbar from "./Components/Navbar";
import "./app.css";
import Home from "./Pages/Home/Home";
import Single from "./Pages/SinglePost/Single";
import Login from "./Pages/login/Login";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./Pages/context/context";
import { useContext } from "react";
import About from "./Pages/About/About";

function App() {
  const { newUser } = useContext(Context);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={newUser ? <Home /> : <Login />} />
          <Route path="/register" element={newUser ? <Home /> : <Register />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={newUser ? <Write /> : <Register />} />
          <Route
            path="/settings"
            element={newUser ? <Settings /> : <Register />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
