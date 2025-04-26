import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/NavBar.jsx";
import Body from "../styles/Body.css";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <section>
        <h1 className="logo">Welcome to Hack2School Course Insights!</h1>
        <Link to="/create" className="comment-user-button">
          Create a New Class
        </Link>
      </section>
    </div>
  );
}

export default Home;