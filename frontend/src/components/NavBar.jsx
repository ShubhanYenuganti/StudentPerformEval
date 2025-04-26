import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li className="nav-items"><Link to="/">HOME</Link></li>
        <li className="nav-items"><Link to="/boarding-pass">BOARDING PASS</Link></li>
      </ul>
    </div>
  );
}