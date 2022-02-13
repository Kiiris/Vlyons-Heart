import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [clicked, setClicked] = useState(false);
  const menuBar = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <ul id="navbar">
        <nav className="nav">
          <li>
            <div className="linebutton" onClick={menuBar}>
              {clicked ? (
                <img
                  src="https://toppng.com/uploads/preview/menu-icon-png-3-lines-11552739310fjzs2n2wxt.png"
                  height="35px"
                  width="35px"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                'Here'
              )}
            </div>
          </li>
          {clicked === true ? (
            <section>
              <li>
                <Link to="/">Home</Link>
              </li>
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
              <li>
                <Link to="/questions">Questions</Link>
              </li>
              <li>
                <Link to="/subscriptions">Subscribe</Link>
              </li>
            </section>
          ) : null}
        </nav>
      </ul>
    </div>
  );
};
export default NavBar;
