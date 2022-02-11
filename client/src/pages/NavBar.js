import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <ul className="nav">
        <nav>
          <Link to="/messages">Matches</Link>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/accounts"> Accounts</Link>
          </li>
          <li>
            <button
              onClick={() =>
                props.history.push(`/user/${props.currentUser.id}`)
              }
            >
              Your Profile
            </button>
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
