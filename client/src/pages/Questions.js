import React, { useState } from 'react';

const Questions = (props) => {
  const [questions, setQuestions] = [];

  const romantic = {
    "Is long distance something that you're comfortable with?": 2,
    'How romantic do you think you are?': 2
  };
  const hard_working = {
    'How important is a college degree for you?': 2
  };
  const athletic = {
    'Are your physical attributes more important than mental?': 2,
    'Is working out a part of your normal routine?': 2
  };
  const nerdy = {
    'How important are games to you?': 2,
    "Is coding something you're very particular about?": 2
  };
  const pickles = localStorage.getItem('loggedInUser');
  console.log(typeof pickles);

  return <div>Hello</div>;
};
export default Questions;
