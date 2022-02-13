import React from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {
  return (
    <div>
      <br />
      {props.started && props.logged ? (
        <>
          <section>
            <br />
            <br />
            <br />
            <hr />
            <h1>Yo! Welcome Back, {props.currentUser.username}!</h1>
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
            <p className="hometext">
              On my Block is where you can receive all the info you need when
              entering a new town. If you make an account you can post crime
              tips, recommendations about your city, and even like and comment
              on other's posts. There's a community of folks out there from all
              over the country. We have safety tips out here well.
            </p>
          </section>
          <h1> Let's Get To It!</h1>
          <Link to="/profiles" className="homelinks">
            Find Some Matches!
          </Link>
          <br />
          <Link to={`/user/${props.currentUser.id}`} className="homelinks">
            Head to Your Profile!
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default Home;
