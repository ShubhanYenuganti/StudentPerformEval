import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/NavBar.jsx";
import Body from "../styles/Body.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <section>
          <h1 className="logo">Welcome to Hack2School Course Insights!</h1>
        </section>
      </div>
    </div>
  );
}

export default Home;