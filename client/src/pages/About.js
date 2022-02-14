import React from 'react';

const About = (props) => {
  return (
    <div>
      <br />
      <br />
      <h1 className="homewelcome" style={{ color: 'orange' }}>
        Hey! Are you not getting enough matches here?
      </h1>
      <br />
      <h1 style={{ color: 'orange', fontSize: '3em' }}>
        Check out our global chat site! Co-founded by CEO of Vlyons
      </h1>
      <hr />
      <a href="https://u4-hw-vue-messenger-rosy.vercel.app/">
        <img src="https://media4.giphy.com/media/mf8UbIDew7e8g/giphy.gif?cid=790b7611186bdc22abd22d0f6f415fa4390e86dfe1d9edc3&rid=giphy.gif&ct=g" />
      </a>
    </div>
  );
};

export default About;
