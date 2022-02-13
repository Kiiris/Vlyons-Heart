import React, { useState } from 'react';
import axios from 'axios';
const Accounts = (props) => {
  const [logged, setLogged] = useState(false);
  const [Login, setLogin] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [currentUser, setCurrentUser] = useState('');

  const inputHandler = (e) => {
    setLogin({ ...Login, [e.target.className]: e.target.value });
  };

  const loginButton = (e) => {
    e.preventDefault();
    const user = props.members.find(
      (element) =>
        element.username === Login.username &&
        element.password === Login.password &&
        element.email === Login.email
    );
    // user === undefined ? console.log('not a good user') :
    console.log(user);
    setCurrentUser(user);
    localStorage.setItem('loggedInUser', currentUser);
    // localStorage.getItem("loggedInUser")
    setLogged(true);
  };

  const createAccount = async (e) => {
    e.preventDefault();
    const newAccount = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      gender: e.target.gender.value,
      preference: e.target.preference.value,
      birth_year: e.target.birth_year.value,
      location: e.target.location.value,
      self_summary: e.target.self_summary.value,
      description: e.target.description.value,
      photo_url: e.target.photo_url.value,
      album: [e.target.photo_url.value]
    };
    await axios.post(`http://localhost:8000/user/`, newAccount);
    // window.location.reload();
  };
  return (
    <div>
      <br />

      <form className="sign">
        <input
          type="text"
          onChange={inputHandler}
          value={Login.email}
          className="email"
          placeholder="Email"
        />
        <input
          type="text"
          onChange={inputHandler}
          value={Login.username}
          className="username"
          placeholder="Username"
        />
        <input
          type="password"
          onChange={inputHandler}
          value={Login.password}
          className="password"
          placeholder="Password"
        />
        <br />
        <button className="loginbutton" onClick={loginButton} type="submit">
          Login
        </button>
      </form>

      <form onSubmit={createAccount}>
        <div className="form">
          <div className="formField">
            <h1>Let's Get Our Love On </h1>
            <input
              name="email"
              type="text"
              placeholder="email"
              className="formTextArea"
            />

            <input
              name="username"
              type="text"
              placeholder="username"
              className="formTextArea"
            />

            <input
              name="password"
              type="text"
              placeholder="password"
              className="formTextAreawitness"
            />
          </div>
          <div className="formField">
            <select className="gender" name="gender">
              <option value="M">I am Man</option>
              <option value="W">I am Woman</option>
              <option value="N">Nonbinary</option>
            </select>

            <select className="gender" name="preference">
              <option value="M">I Prefer Men</option>
              <option value="W">I Prefer Women</option>
              <option value="N">Both</option>
            </select>
          </div>
          <textarea
            name="self_summary"
            type="text"
            className="self"
            placeholder="self_summary"
          />
          <textarea
            name="description"
            type="text"
            className="description"
            placeholder="description"
          />
          <textarea
            name="photo_url"
            type="text"
            className="photo"
            placeholder="photo"
          />
          <br />
          <input
            name="location"
            type="text"
            className="location"
            placeholder="location"
          />
          <input
            name="birth_year"
            type="number"
            className="birth_year"
            placeholder="birth_year"
          />
        </div>

        <button className="likebutton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Accounts;
