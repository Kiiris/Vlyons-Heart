import React, { useState } from 'react';
import axios from 'axios';

const Profiles = (props) => {
  const [members, setMembers] = useState(props.members);
  const [men, setMen] = useState(props.men);
  const [women, setWomen] = useState(props.women);
  const orderRomantic = async () => {
    const res = await axios.get(
      `http://localhost:8000/user/?ordering=-romantic`
    );
    if (props.currentUser.preference === 'N') {
      setMembers(res.data);
    } else if (props.currentUser.preference === 'W') {
      const results = res.data;
      const girls = results.filter((element) => element.gender === 'W');
      setWomen(girls);
    } else if (props.currentUser.preference === 'M') {
      const results = res.data;
      const boys = results.filter((element) => element.gender === 'M');
      setMen(boys);
      console.log(res.data);
    }
  };
  const orderNerdy = async () => {
    const res = await axios.get(`http://localhost:8000/user/?ordering=-nerdy`);
    if (props.currentUser.preference === 'N') {
      setMembers(res.data);
    } else if (props.currentUser.preference === 'W') {
      const results = res.data;
      const girls = results.filter((element) => element.gender === 'W');
      setWomen(girls);
    } else if (props.currentUser.preference === 'M') {
      const results = res.data;
      const boys = results.filter((element) => element.gender === 'M');
      setMen(boys);
      console.log(res.data);
    }
  };
  const orderMusical = async () => {
    const res = await axios.get(
      `http://localhost:8000/user/?ordering=-musical`
    );
    if (props.currentUser.preference === 'N') {
      setMembers(res.data);
    } else if (props.currentUser.preference === 'W') {
      const results = res.data;
      const girls = results.filter((element) => element.gender === 'W');
      setWomen(girls);
    } else if (props.currentUser.preference === 'M') {
      const results = res.data;
      const boys = results.filter((element) => element.gender === 'M');
      setMen(boys);
      console.log(res.data);
    }
  };
  const orderWorking = async () => {
    const res = await axios.get(
      `http://localhost:8000/user/?ordering=-hard_working`
    );

    if (props.currentUser.preference === 'N') {
      setMembers(res.data);
    } else if (props.currentUser.preference === 'W') {
      const results = res.data;
      const girls = results.filter((element) => element.gender === 'W');
      setWomen(girls);
    } else if (props.currentUser.preference === 'M') {
      const results = res.data;
      const boys = results.filter((element) => element.gender === 'M');
      setMen(boys);
      console.log(res.data);
    }
  };
  return (
    <div>
      <header>
        <br />
        <br />
        <h1> Welcome to the party, {props.currentUser.username}</h1>

        <h4>What you want is what you get</h4>
        <button
          className="profilebuttons"
          id="romancebutton"
          onClick={orderRomantic}
        >
          Romantic
        </button>
        <button className="profilebuttons" id="geekbutton" onClick={orderNerdy}>
          Geeks
        </button>
        <button
          className="profilebuttons"
          id="musicalbutton"
          onClick={orderMusical}
        >
          Musicians
        </button>
        <button
          className="profilebuttons"
          id="workingbutton"
          onClick={orderWorking}
        >
          Hardworkers
        </button>

        {props.currentUser.preference === 'N'
          ? members.map((element) => {
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
                        {parseInt(element.romantic) > parseInt(element.nerdy) &&
                        parseInt(element.romantic) >
                          parseInt(element.hard_working) &&
                        parseInt(element.romantic) >
                          parseInt(element.musical) ? (
                          <div>
                            <img
                              src="https://www.svgrepo.com/show/154220/romantic-dinner.svg"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.nerdy) >
                            parseInt(element.romantic) &&
                          parseInt(element.nerdy) >
                            parseInt(element.hard_working) &&
                          parseInt(element.nerdy) >
                            parseInt(element.musical) ? (
                          <div>
                            <img
                              src="https://www.pngitem.com/pimgs/m/245-2457737_nerd-computer-icons-geek-nerd-icon-hd-png.png"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.musical) >
                            parseInt(element.romantic) &&
                          parseInt(element.musical) >
                            parseInt(element.hard_working) &&
                          parseInt(element.musical) >
                            parseInt(element.nerdy) ? (
                          <div>
                            <img
                              src="https://previews.123rf.com/images/kisslilly/kisslilly1503/kisslilly150300074/37842093-vector-musical-icons.jpg"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.hard_working) >
                            parseInt(element.romantic) &&
                          parseInt(element.hard_working) >
                            parseInt(element.musical) &&
                          parseInt(element.hard_working) >
                            parseInt(element.nerdy) ? (
                          <div>
                            <img
                              src="https://previews.123rf.com/images/kisslilly/kisslilly1503/kisslilly150300074/37842093-vector-musical-icons.jpg"
                              height="80"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : props.currentUser.preference === 'M'
          ? men.map((element) => {
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
                        {parseInt(element.romantic) > parseInt(element.nerdy) &&
                        parseInt(element.romantic) >
                          parseInt(element.hard_working) &&
                        parseInt(element.romantic) >
                          parseInt(element.musical) ? (
                          <div>
                            <img
                              src="https://www.svgrepo.com/show/154220/romantic-dinner.svg"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.nerdy) >
                            parseInt(element.romantic) &&
                          parseInt(element.nerdy) >
                            parseInt(element.hard_working) &&
                          parseInt(element.nerdy) >
                            parseInt(element.musical) ? (
                          <div>
                            <img
                              src="https://www.pngitem.com/pimgs/m/245-2457737_nerd-computer-icons-geek-nerd-icon-hd-png.png"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.musical) >
                            parseInt(element.romantic) &&
                          parseInt(element.musical) >
                            parseInt(element.hard_working) &&
                          parseInt(element.musical) >
                            parseInt(element.nerdy) ? (
                          <div>
                            <img
                              src="https://previews.123rf.com/images/kisslilly/kisslilly1503/kisslilly150300074/37842093-vector-musical-icons.jpg"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.hard_working) >
                            parseInt(element.romantic) &&
                          parseInt(element.hard_working) >
                            parseInt(element.musical) &&
                          parseInt(element.hard_working) >
                            parseInt(element.nerdy) ? (
                          <div>
                            <img
                              src="https://previews.123rf.com/images/kisslilly/kisslilly1503/kisslilly150300074/37842093-vector-musical-icons.jpg"
                              height="80"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : props.currentUser.preference === 'W'
          ? women.map((element) => {
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
                        {parseInt(element.romantic) > parseInt(element.nerdy) &&
                        parseInt(element.romantic) >
                          parseInt(element.hard_working) &&
                        parseInt(element.romantic) >
                          parseInt(element.musical) ? (
                          <div>
                            <img
                              src="https://www.svgrepo.com/show/154220/romantic-dinner.svg"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.nerdy) >
                            parseInt(element.romantic) &&
                          parseInt(element.nerdy) >
                            parseInt(element.hard_working) &&
                          parseInt(element.nerdy) >
                            parseInt(element.musical) ? (
                          <div>
                            <img
                              src="https://www.pngitem.com/pimgs/m/245-2457737_nerd-computer-icons-geek-nerd-icon-hd-png.png"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.musical) >
                            parseInt(element.romantic) &&
                          parseInt(element.musical) >
                            parseInt(element.hard_working) &&
                          parseInt(element.musical) >
                            parseInt(element.nerdy) ? (
                          <div>
                            <img
                              src="https://previews.123rf.com/images/kisslilly/kisslilly1503/kisslilly150300074/37842093-vector-musical-icons.jpg"
                              height="80"
                            />
                          </div>
                        ) : parseInt(element.hard_working) >
                            parseInt(element.romantic) &&
                          parseInt(element.hard_working) >
                            parseInt(element.musical) &&
                          parseInt(element.hard_working) >
                            parseInt(element.nerdy) ? (
                          <div>
                            <img
                              src="https://previews.123rf.com/images/kisslilly/kisslilly1503/kisslilly150300074/37842093-vector-musical-icons.jpg"
                              height="80"
                            />
                          </div>
                        ) : null}
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
