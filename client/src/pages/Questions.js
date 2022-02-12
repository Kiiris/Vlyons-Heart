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

  showSlides(slideIndex);

  // Next/previous controls
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  function showSlides(n) {
    let slides = document.querySelectorAll('.mySlides');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style = { display: 'none' };
    }
    slides[slideIndex - 1].style = { display: 'block' };
  }

  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Questions;

{
  /* <div className="slideshow">
<div
  className="slideshowSlider"
  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
>
  {colors.map((backgroundColor, index) => (
    <div className="slide" key={index} style={{ backgroundColor }}>
      <h1>Section</h1>
      {questions.map((element) => (
        <section>
          <hr />
          <h2>{element.romance_one}</h2>
          <h3>{element.definitely}</h3>
          <h3>{element.moderately}</h3>
        </section>
      ))}
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
</div> */
}
