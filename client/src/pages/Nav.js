import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <ul className="nav">
        <nav>
          <Link></Link>
          <Link to="/"></Link>
          <li>
            <Link to="/messages">Add A Crime Tip</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/questions">
            <img className="navicon" src="/noun-about-3553599.png" />
          </Link>
          <Link to="/subscriptions"></Link>
        </nav>
      </ul>
    </div>
  );
};
export default NavBar;
