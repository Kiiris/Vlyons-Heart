import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];
const Questions = (props) => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28'];

  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      romance_one: "Is long distance something that you're comfortable with?",
      romance_two: 'How romantic do you think you are?',
      romance_three: 'Life is good?'
    },
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

  let slideIndex = 0;
  const nerdy = {
    'How important are games to you?': 2,
    "Is coding something you're very particular about?": 2
  };
  const another = ['pickles', 'sheep', 'pie'];
  useEffect(() => {
    // setIndex((prevIndex) =>
    //   prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    // );
    // return () => {};
  }, []);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {questions.map((element, index) => (
          <div className="slide" key={index} style={{ color: 'orange' }}>
            <h1>{element.romance_one}</h1>
            <section>
              <hr />
              <h3>{element.definitely}</h3>
              <h3>{element.moderately}</h3>
            </section>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {another.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Questions;
