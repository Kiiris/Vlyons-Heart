import React, { useState } from 'react';
import axios from 'axios';

const Questions = (props) => {
  const [clickDef, setDef] = useState(false);
  const [clickSome, setSome] = useState(false);
  const [clickMod, setMod] = useState(false);
  const [clickNot, setNot] = useState(false);

  const questions = {
    romantic: "Is long distance something that you're comfortable with?",
    romantic:
      'Do you often clear your schedule to make time for people you love?',
    romantic:
      'Would you pickup an activity youve never tried because of your partner?',
    nerdy: 'How important are games to you?',
    nerdy: "Is coding something you're very particular about?",
    hardworking: 'Are your physical attributes more important than mental?',
    hardworking: 'Is working out a part of your normal routine?',
    musical: 'Do you listen to a lot music during the day?',
    musical: 'Singing and/or karoke?',
    nerdy: 'In your free time do you spend way too much time on the computer?',
    hardworking: 'Is a college education for your partner important for you?',
    musical:
      'Was Django someone you were familiar with outside of the coding sphere?',
    romantic:
      'How likely would you be to gift someone flowers on the first date?',
    nerdy: 'Do you get excited by new comic book adaptations?',
    romantic:
      'Is it really important that you show affection for those you talk to',
    hardworking: 'Do you reguarly stick to your pre-planned schedule?',
    musical: 'Are musicians attractive?',
    nerdy: 'Is anime something that youre really into?',
    romantic: 'Do you like watching romcoms with your partner?',
    hardworking: 'Are you extremely motivated by the challenges youre facing?',
    hardworking: 'Are solving challenges important for you to achieve?',
    nerdy: 'Are you obssessed with stories or creative content?',
    nerdy:
      'Do you spend enough time on the computer that you need to wear glasses?',
    musical: 'Do you like dancing by yourself or with a partner?'
  };

  const values = Object.values(questions);

  const [text, setText] = useState(
    values[Math.floor(Math.random() * values.length)]
  );
  let randomItem = values[Math.floor(Math.random() * values.length)];
  const changeText = (text) => {
    setText(text);
    const key = Object.keys(questions).find((key) => questions[key] === text);
    console.log(key);
  };
  const Check = () => {
    setDef(true);
    setMod(false);
    setNot(false);
    setSome(false);
  };
  const CheckSome = () => {
    setSome(true);
    setDef(false);
    setMod(false);
    setNot(false);
  };
  const CheckMod = () => {
    setMod(true);
    setDef(false);
    setNot(false);
    setSome(false);
  };
  const CheckNot = () => {
    setNot(true);
    setDef(false);
    setMod(false);
    setSome(false);
  };

  const key = Object.keys(questions).find((key) => questions[key] === text);

  const handleSubmit = async () => {
    if ((clickDef === true) & (key === 'hardworking')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: parseInt((props.currentUser.hardworking += 4)),
        romantic: props.currentUser.romantic,
        musical: props.currentUser.musical,
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickSome === true) & (key === 'hardworking')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: parseInt((props.currentUser.hardworking += 3)),
        romantic: props.currentUser.romantic,
        musical: props.currentUser.musical,
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickMod === true) & (key === 'hardworking')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: parseInt((props.currentUser.hardworking += 2)),
        romantic: props.currentUser.romantic,
        musical: props.currentUser.musical,
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickNot === true) & (key === 'hardworking')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: parseInt((props.currentUser.hardworking += 1)),
        romantic: props.currentUser.romantic,
        musical: props.currentUser.musical,
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickDef === true) & (key === 'nerdy')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: props.currentUser.hardworking,
        romantic: props.currentUser.romantic,
        musical: props.currentUser.musical,
        nerdy: parseInt((props.currentUser.nerdy += 4))
      });
    } else if ((clickSome === true) & (key === 'nerdy')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: props.currentUser.hardworking,
        romantic: props.currentUser.romantic,
        musical: props.currentUser.musical,
        nerdy: parseInt((props.currentUser.nerdy += 3))
      });
    } else if ((clickMod === true) & (key === 'nerdy')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: props.currentUser.hardworking,
        romantic: props.currentUser.romantic,
        musical: props.currentUser.musical,
        nerdy: parseInt((props.currentUser.nerdy += 2))
      });
    } else if ((clickNot === true) & (key === 'nerdy')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: props.currentUser.hardworking,
        romantic: props.currentUser.romantic,
        musical: props.currentUser.musical,
        nerdy: parseInt((props.currentUser.nerdy += 1))
      });
    } else if ((clickDef === true) & (key === 'romantic')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: props.currentUser.hardworking,
        romantic: parseInt((props.currentUser.romantic += 4)),
        musical: props.currentUser.musical,
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickSome === true) & (key === 'romantic')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        romantic: parseInt((props.currentUser.romantic += 3)),
        hardworking: props.currentUser.hardworking,
        musical: props.currentUser.musical,
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickMod === true) & (key === 'romantic')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        romantic: parseInt((props.currentUser.romantic += 2)),
        hardworking: props.currentUser.hardworking,
        musical: props.currentUser.musical,
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickNot === true) & (key === 'romantic')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        romantic: parseInt((props.currentUser.romantic += 1)),
        hardworking: props.currentUser.hardworking,
        musical: props.currentUser.musical,
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickDef === true) & (key === 'musical')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        hardworking: props.currentUser.hardworking,
        romantic: props.currentUser.romantic,
        musical: parseInt((props.currentUser.musical += 4)),
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickSome === true) & (key === 'musical')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        romantic: props.currentUser.romantic,
        hardworking: props.currentUser.hardworking,
        musical: parseInt((props.currentUser.musical += 3)),
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickMod === true) & (key === 'musical')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        romantic: props.currentUser.romantic,
        hardworking: props.currentUser.hardworking,
        musical: parseInt((props.currentUser.musical += 2)),
        nerdy: props.currentUser.nerdy
      });
    } else if ((clickNot === true) & (key === 'musical')) {
      await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
        email: props.currentUser.email,
        username: props.currentUser.username,
        password: props.currentUser.password,
        gender: props.currentUser.gender,
        preference: props.currentUser.preference,
        birth_year: props.currentUser.birth_year,
        location: props.currentUser.location,
        description: props.currentUser.description,
        photo_url: props.currentUser.photo_url,
        likes: props.currentUser.liked_by,
        liked_by: props.currentUser.liked_by,
        romantic: props.currentUser.romantic,
        hardworking: props.currentUser.hardworking,
        musical: parseInt((props.currentUser.musical += 1)),
        nerdy: props.currentUser.nerdy
      });
    }
    changeText(randomItem);
  };
  return (
    <div className="slideshow">
      {props.logged ? (
        <>
          <section className="questions">
            <h1 className="questiontext"> {text}</h1>
            <div
              className={clickDef ? 'definitely' : 'inactive'}
              id="definitely"
            >
              <button
                className="submit"
                onClick={() => {
                  Check();
                }}
              >
                Definitely
              </button>
            </div>
            <div className={clickSome ? 'somewhat' : 'inactive'}>
              <button
                className="submit"
                onClick={() => {
                  CheckSome();
                }}
              >
                Somewhat
              </button>
            </div>
            <div className={clickMod ? 'moderately' : 'inactive'}>
              <button
                className="submit"
                onClick={() => {
                  CheckMod();
                }}
              >
                Moderately
              </button>
            </div>
            <div className={clickNot ? 'not' : 'inactive'}>
              <button
                className="submit"
                onClick={() => {
                  CheckNot();
                }}
              >
                Not at all
              </button>
            </div>
            <button
              className="nicebutton"
              disabled={!clickDef & !clickMod & !clickNot & !clickSome}
              onClick={handleSubmit}
            >
              Next Question!
            </button>
          </section>
        </>
      ) : null}
    </div>
  );
};
export default Questions;
