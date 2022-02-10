import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <ul className="nav">
        <nav>
          <Link to="/messages">Messages</Link>
          <Link to="/about">about</Link>
          <li>
            <Link to="/accounts"> Accounts</Link>
          </li>
          <li>
            <Link to="/profiles">profiles</Link>
          </li>
          <Link to="/questions">Questions</Link>
          <Link to="/subscriptions">Subscribe</Link>
        </nav>
      </ul>
    </div>
  );
};
export default NavBar;
