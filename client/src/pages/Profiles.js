import React, { useState } from 'react';

const Profiles = (props) => {
  // const handleChange = (e) => {
  //   setPreferences(e.target.value);
  // };
  console.log(props.currentUser);
  console.log(props.members);
  return (
    <div>
      <header class>
        <h1> Welcome to the party, {props.currentUser.username}</h1>

        <h4>What you want is what you get</h4>

        {props.currentUser.preference === 'N'
          ? props.members.map((element) => {
              return (
                <div className="listings">
                  <div
                    className="card"
                    key={element.id}
                    onClick={() => props.history.push(`/user/${element.id}`)}
                  >
                    <div className="details-row">
                      <h2>{element.username}</h2>
                      <div className="image-wrapper">
                        <img src={element.photo_url} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : props.currentUser.preference === 'M'
          ? props.men.map((element) => {
              return (
                <div className="listings">
                  <div
                    className="card"
                    key={element.id}
                    onClick={() => props.history.push(`/user/${element.id}`)}
                  >
                    <div className="details-row">
                      <h2>{element.username}</h2>
                      <div className="image-wrapper">
                        <img src={element.photo_url} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : props.currentUser.preference === 'W'
          ? props.women.map((element) => {
              return (
                <div className="listings">
                  <div
                    className="card"
                    key={element.id}
                    onClick={() => props.history.push(`/user/${element.id}`)}
                  >
                    <div className="details-row">
                      <h2>{element.username}</h2>
                      <div className="image-wrapper">
                        <img src={element.photo_url} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </header>
    </div>
  );
};

export default Profiles;
