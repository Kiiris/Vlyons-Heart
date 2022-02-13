import React from 'react';

const Home = (props) => {
  return (
    <div>
      <br />
      {props.started && props.logged ? (
        <section>
          <h1>This is the home page</h1>
        </section>
      ) : null}
    </div>
  );
};

export default Home;
