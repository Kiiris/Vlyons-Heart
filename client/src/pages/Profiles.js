import React, { useState } from 'react';

const Profiles = (props) => {
  const [preferences, setPreferences] = useState('Both');
  const handleChange = (e) => {
    setPreferences(e.target.value);
  };
  console.log(props.currentUser);
  console.log(props.members);
  return (
    <div>
      <header>
        <h1> Welcome to the party, {props.currentUser.username}</h1>
        {/* <form>
          <select name="choice" onChange={handleChange}>
            <option value="Men">Find Men</option>
            <option value="Women">Find Women</option>
            <option value="Both">Both</option>
          </select>
        </form> */}
        <h4>What you want is what you get</h4>
        {props.currentUser.preference === 'N'
          ? props.members.map((element) => {
              return (
                <div
                  key={element.id}
                  onClick={() => props.history.push(`/user/${element.id}`)}
                >
                  <h2>{element.username}</h2>
                  <img src={element.photo_url} />
                </div>
              );
            })
          : props.currentUser.preference === 'M'
          ? props.men.map((element) => {
              return (
                <div
                  key={element.id}
                  onClick={() => props.history.push(`/user/${element.id}`)}
                >
                  <h2>{element.username}</h2>
                  <img src={element.photo_url} />
                </div>
              );
            })
          : props.currentUser.preference === 'W'
          ? props.women.map((element) => {
              return (
                <div
                  key={element.id}
                  onClick={() => props.history.push(`/user/${element.id}`)}
                >
                  <h2>{element.username}</h2>
                  <img src={element.photo_url} />
                </div>
              );
            })
          : null}
      </header>
    </div>
  );
};

export default Profiles;
