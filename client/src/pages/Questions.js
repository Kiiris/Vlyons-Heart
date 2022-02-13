import React, { useEffect, useState, useRef } from 'react';

const Questions = (props) => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28'];
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      athletic: 'Are your physical attributes more important than mental?',
      athletic_two: 'Is working out a part of your normal routine?'
    },
    {
      definitely: 'Definitely',
      somewhat: 'somewhat',
      moderately: 'moderately',
      not_at_all: 'not at all'
    }
  ]);

  const romance = [
    "Is long distance something that you're comfortable with?",
    'How romantic do you think you are?',
    'Life is good?'
  ];
  const [text, setText] = useState(
    romance[Math.floor(Math.random() * romance.length)]
  );
  let randomItem = romance[Math.floor(Math.random() * romance.length)];
  const changeText = (text) => {
    setText(text);
  };
  const nerdy = {
    'How important are games to you?': 2,
    "Is coding something you're very particular about?": 2
  };
  const another = ['pickles', 'sheep', 'pie'];
  const Check = (e) => {
    if (def.current.id == 'definitely') {
      console.log('success');
    } else if (mod.current.id == 'moderately') {
      console.log('moderate success');
    } else if (some.current.id == 'somewhat') {
      console.log('some success');
    }
  };
  const def = useRef('definitely');
  const mod = useRef('moderately');
  const some = useRef('somewhat');
  console.log(mod.current.id);
  console.log(def.current.id);
  console.log(some.current.id);
  return (
    <div className="slideshow">
      <section>
        <h1>{text}</h1>
        <button
          ref={def}
          id="definitely"
          onClick={() => {
            changeText(randomItem);
            Check();
          }}
        >
          Definitely
        </button>
        <hr />
        <button
          id="somewhat"
          ref={some}
          onClick={() => {
            changeText(randomItem);
            Check();
          }}
        >
          Somewhat
        </button>
        <hr />
        <button
          ref={mod}
          id="moderately"
          // ref={myRef}
          onClick={() => {
            changeText(randomItem);
            Check();
          }}
        >
          Moderately
        </button>
        <hr />
        <button
          onClick={() => {
            changeText(randomItem);
          }}
        >
          Not at all
        </button>
      </section>
    </div>
  );
};
export default Questions;
