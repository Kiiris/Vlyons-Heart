import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Messages = (props) => {
  const [conversations, setConversations] = useState();
  const [messages, setMessages] = useState();
  const [numbers, setNumbers] = useState(0);
  const getConversations = async () => {
    const res = await axios.get(
      `http://localhost:8000/conversation/?user=${props.currentUser.id}`
    );
    setConversations(res.data);
    setNumbers(res.data.length);
    console.log(res.data);
  };
  const getMessages = async () => {
    const res = await axios.get(`http://localhost:8000/message`);
    setMessages(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getConversations();
  }, []);

  return (
    <div>
      <div>
        <br />
        <br />
        <h1>You have {numbers} matches</h1>
      </div>
      <div>
        {props.logged
          ? conversations?.map((element) => {
              return (
                <div
                  className="card"
                  key={element.id}
                  onClick={() => props.history.push(`/messages/${element.id}`)}
                >
                  <h2>{element.title}</h2>
                  <img className="matchimages" src={element.photo_one} />
                  <img src={element.photo_two} />
                  <button
                    className="DELETEbutton"
                    onClick={async () => {
                      await axios.delete(
                        `http://localhost:8000/conversation/${element.id}`
                      );
                      alert(`${element.title} has been deleted`);
                    }}
                  >
                    Delete {element.title}
                  </button>
                  <hr />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Messages;
