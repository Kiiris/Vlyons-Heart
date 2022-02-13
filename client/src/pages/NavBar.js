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
                />
              ) : (
                <img
                  src="/noun-menu-icon-3601265.png"
                  height="35px"
                  width="35px"
                />
              )}
            </div>
          </li>
          {clicked === true ? (
            <section>
              <li>
                <Link to={`/user/${props.currentUser.id}`}>
                  <img src={props.currentUser.photo_url} height="40" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                    height="40"
                  />
                </Link>
              </li>
              <li>
                <Link to="/messages">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuB1B8EbwC6PKpkd9_gLat7O9cVQa57yiHw&usqp=CAU"
                    height="40"
                  />
                </Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/accounts"> Register</Link>
              </li>
              <li>
                <Link to="/profiles">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/833/833234.png"
                    height="40"
                  />
                </Link>
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
