import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clock">clock</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/jeopardy">Jeopardy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
