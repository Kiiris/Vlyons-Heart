import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Profiles from './pages/Profiles';
import Accounts from './pages/Accounts';
import Questions from './pages/Questions';
import ProfileDetails from './pages/ProfileDetails';
import Messages from './pages/Messages';
import axios from 'axios';
import './App.css';
import Home from './pages/Home';
import MessageDetails from './pages/MessageDetails';
import About from './pages/About';

function App() {
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [members, setMembers] = useState([]);
  const [started, setStarted] = useState(false);
  const [myProfile, setProfile] = useState(false);
  const [user, seUser] = useState();

  const getResults = async () => {
    const res = await axios.get(`http://localhost:8000/user`);
    const results = res.data;
    const people = results.filter(
      (element) => element.gender === 'W' || element.gender === 'M'
    );
    const girls = results.filter((element) => element.gender === 'W');
    const boys = results.filter((element) => element.gender === 'M');
    setMembers(people);
    setWomen(girls);
    setMen(boys);
  };
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
    const user = members.find(
      (element) =>
        element.username === Login.username &&
        element.password === Login.password &&
        element.email === Login.email
    );
    // user === undefined ? console.log('not a good user') :
    console.log(user);
    setCurrentUser(user);
    // localStorage.setItem('loggedInUser', JSON.stringify(user));
    //JSON.parse
    setLogged(true);
    localStorage.setItem('loggedInUser', logged);
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

  useEffect(() => {
    getResults();
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      localStorage.removeItem('loggedInUser');
    }
  }, []);

  const startUp = (e) => {
    setStarted(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!started ? (
          <button className="startup" onClick={startUp}></button>
        ) : null}
        {started ? (
          <>
            {logged ? <NavBar currentUser={currentUser} /> : null}
            <div>
              <article className="introtext">
                <h1 className={logged ? 'gone' : 'party'}>
                  Welcome to the Party
                </h1>
              </article>
              <form className={logged ? 'gone' : 'sign'}>
                <input
                  required
                  type="text"
                  onChange={inputHandler}
                  value={Login.email}
                  className="email"
                  placeholder="Email"
                />
                <input
                  required
                  type="text"
                  onChange={inputHandler}
                  value={Login.username}
                  className="username"
                  placeholder="Username"
                />
                <input
                  required
                  type="password"
                  onChange={inputHandler}
                  value={Login.password}
                  className="password"
                  placeholder="Password"
                />

                <button
                  className="loginbutton"
                  onClick={loginButton}
                  type="submit"
                >
                  Login
                </button>
              </form>
              <form
                className={logged ? 'gone' : 'valid'}
                onSubmit={createAccount}
              >
                <div className="form">
                  <div className="formField">
                    <h2>Let's Get Our Love On</h2>
                    <input
                      name="email"
                      type="text"
                      placeholder="email"
                      className="formTextArea"
                    />
                  </div>

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
                  <div className="formField">
                    <select className="gender" name="gender">
                      <option value="M">I am Man</option>
                      <option value="W">I am Woman</option>
                      <option value="N">Nonbinary</option>
                    </select>
                    <select className="gender" name="preference">
                      <option value="M">Prefer Men</option>
                      <option value="W">Prefer Women</option>
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
          </>
        ) : null}
        <main>
          <Switch>
            <Route
              exact
              path="/profiles"
              component={(props) => (
                <Profiles
                  {...props}
                  members={members}
                  men={men}
                  women={women}
                  currentUser={currentUser}
                  logged={logged}
                />
              )}
            />
            <Route
              exact
              path="/accounts"
              component={(props) => (
                <Accounts
                  {...props}
                  members={members}
                  men={men}
                  women={women}
                  currentUser={currentUser}
                  logged={logged}
                />
              )}
            />
            <Route
              exact
              path="/questions"
              component={(props) => (
                <Questions
                  {...props}
                  members={members}
                  men={men}
                  women={women}
                  currentUser={currentUser}
                  logged={logged}
                />
              )}
            />
            <Route
              exact
              path="/user/:id"
              component={(props) => (
                <ProfileDetails
                  {...props}
                  members={members}
                  men={men}
                  women={women}
                  currentUser={currentUser}
                  logged={logged}
                />
              )}
            />
            <Route
              exact
              path="/messages"
              component={(props) => (
                <Messages
                  {...props}
                  members={members}
                  men={men}
                  women={women}
                  currentUser={currentUser}
                  logged={logged}
                />
              )}
            />
            <Route
              exact
              path="/messages/:id"
              component={(props) => (
                <MessageDetails
                  {...props}
                  members={members}
                  men={men}
                  women={women}
                  currentUser={currentUser}
                  logged={logged}
                />
              )}
            />
            <Route
              exact
              path="/"
              component={(props) => (
                <Home
                  {...props}
                  members={members}
                  men={men}
                  women={women}
                  currentUser={currentUser}
                  logged={logged}
                  started={started}
                />
              )}
            />
            <Route
              exact
              path="/about"
              component={(props) => (
                <About
                  {...props}
                  members={members}
                  men={men}
                  women={women}
                  currentUser={currentUser}
                  logged={logged}
                  started={started}
                />
              )}
            />
          </Switch>
        </main>
      </header>
    </div>
  );
}

export default App;
