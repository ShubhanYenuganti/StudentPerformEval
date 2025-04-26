import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Hack2School Course Insights!</h1>
      <Link to="/create">Create a New Class</Link>
    </div>
  );
}

export default Home;