import React, { useEffect, useState } from 'react';

const Questions = (props) => {
  const [questions, setQuestions] = [];
  const colors = ['#0088FE', '#00C49F', '#FFBB28'];

  const [index, setIndex] = useState(0);
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
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
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
