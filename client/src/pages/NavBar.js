import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <nav className="nav">
        <li>
          <Link to="/messages">Matches</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/accounts"> Register</Link>
        </li>
        <li>
          <Link to={`/user/${props.currentUser.id}`}>YourAccount</Link>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
        <Link to="/questions">Questions</Link>
        <li>
          <Link to="/subscriptions">Subscribe</Link>
        </li>
      </nav>
    </div>
  );
};
export default NavBar;
