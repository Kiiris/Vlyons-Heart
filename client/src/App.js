import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  const [results, setResults] = useState({});
  const [men, setMen] = useState({});
  const [women, setWomen] = useState({});
  const [members, setMembers] = useState({});
  const [preferences, setPreferences] = useState('Both');
  const [logged, setLogged] = useState(false);
  const [Login, setLogin] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [currentUser, setCurrentUser] = useState({});

  const getResults = async () => {
    const res = await axios.get(`http://localhost:8000/user`);
    setResults(res.data);
    const people = results.filter(
      (element) => element.gender === 'W' || element.gender === 'M'
    );
    const girls = results.filter((element) => element.gender === 'W');
    const boys = results.filter((element) => element.gender === 'M');
    setMembers(people);
    setWomen(girls);
    setMen(boys);
    console.log(girls);
    console.log(boys);
    console.log(people);
  };

  useEffect(() => {
    getResults();
  }, []);

  const handleChange = (e) => {
    setPreferences(e.target.value);
  };

  const inputHandler = (e) => {
    setLogin({ ...Login, [e.target.className]: e.target.value });
  };

  const loginButton = (e) => {
    e.prevent.Default();
    Object.keys(members).forEach((key) => {
      if (
        members[key].username === Login.username &&
        members[key].email === Login.email &&
        members[key].password === Login.password
      ) {
        const user = members.filter(
          (element) =>
            element.username == Login.username &&
            element.email == Login.email &&
            element.password == Login.password
        );
        setCurrentUser(user);
        setLogged(true);
        console.log('is something working');
      }
      console.log('bananas');
    });
  };

  // Object.keys(results).forEach((key) => {
  //   console.log(results[key].username);
  //   if (results[key].username === 'Jana') {
  //     console.log('hello');
  //   }
  // });

  // const filtered = Object.filter(
  //   results,
  //   ([username, preference]) => username === 'Jana'
  // );
  // console.log(filtered);

  return (
    <div className="App">
      <header className="App-header">
        {/* {logged ? <h1>Welcome to the party {currentUser.username}</h1> : null} */}
        <form className={!logged ? 'valid' : 'loggedin'}>
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

          <button className="loginbutton" onClick={loginButton} type="submit">
            Login
          </button>
        </form>
        <h1>I like {preferences} </h1>
        <form>
          <select name="choice" onChange={handleChange}>
            <option value="Men">Find Men</option>
            <option value="Women">Find Women</option>
            <option value="Both">Both</option>
          </select>
        </form>
        <h4>What you want is what you get</h4>
        {preferences === 'Both'
          ? members.map((element) => {
              return (
                <div key={element.id}>
                  <h2>{element.username}</h2>
                  <h4>{element.gender}</h4>
                  <img src={element.photo_url} />
                </div>
              );
            })
          : preferences === 'Men'
          ? men.map((element) => {
              return (
                <div key={element.id}>
                  <h2>{element.username}</h2>
                  <h4>{element.gender}</h4>
                  <img src={element.photo_url} />
                </div>
              );
            })
          : preferences === 'Women'
          ? women.map((element) => {
              return (
                <div key={element.id}>
                  <h2>{element.username}</h2>
                  <h4>{element.gender}</h4>
                  <img src={element.photo_url} />
                </div>
              );
            })
          : null}
      </header>
    </div>
  );
}

export default App;
