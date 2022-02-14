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
                <Link to="/about">
                  <img
                    src="https://www.clipartmax.com/png/middle/46-461952_for-companies-interested-in-selling-or-distributing-global-icon-transparent.png"
                    height="40"
                  />
                </Link>
              </li>
              <li>
                <Link to="/accounts">
                  {' '}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3456/3456426.png"
                    height="40"
                  />
                </Link>
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
                <Link to="/questions">
                  <img
                    src="https://www.pinclipart.com/picdir/middle/104-1048025_frequently-asked-questions-question-icon-png-transparent-clipart.png"
                    height="40"
                  />
                </Link>
              </li>
              <li>
                <Link to="/subscriptions">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/search-engine-optimization-27/48/landing_page-512.png"
                    height="40"
                  />
                </Link>
              </li>
            </section>
          ) : null}
        </nav>
      </ul>
    </div>
  );
};
export default NavBar;
