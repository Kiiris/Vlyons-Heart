import React from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {
  return (
    <div>
      <br />
      {props.started && props.logged ? (
        <>
          <br />
          <br />
          <br />
          <hr />
          <section>
            <h1 className="homewelcome">
              Yo!Welcome Back, {props.currentUser.username}!
            </h1>
            <p className="hometext">
              Hey there! Vlyons was founded on the principle of meeting new
              people! Chat with strangers, find someone new, meet with the
              people you'll have never met before! All that and more at
              Vlyons-Heart!
            </p>
            <h1 className="homewelcome"> Let's Get To It!</h1>
            <Link to="/profiles" className="homelinks">
              Find Some Matches!
            </Link>
            <br />
            <Link to={`/user/${props.currentUser.id}`} className="homelinks">
              Head to Your Profile!
            </Link>
            <br />
            <img
              className="homeicon"
              src="https://sfghf.org/wp-content/uploads/2022/01/2022-Todd-Berman-Four-Hills-Four-Towers-Flowing-Fog-Native-Flowers-Large-front-1.png"
              height="350"
              width="250"
            />
            <img
              className="homeicon"
              src="https://thebirdsings.com/wp-content/uploads/2016/03/in-each-of-our-hearts.jpg"
              height="350"
              width="250"
            />
            <img
              className="homeicon"
              src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/07/GettyImages-920513518_thumb-732x549.jpg"
              height="350"
              width="250"
            />
            <br />
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Home;
