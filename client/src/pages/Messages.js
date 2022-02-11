import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = (props) => {
  const [conversations, setConversations] = useState();
  const [messages, setMessages] = useState();
  const getConversations = async () => {
    const res = await axios.get(
      `http://localhost:8000/conversation/?user=${props.currentUser.id}`
    );
    setConversations(res.data);
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
  // console.log(conversations[0].photo_one);
  // const rightConversation = conversations.filter(
  //   (element) => element.title === 'Jana & Jacob'
  // );
  // console.log(rightConversation);
  // props.currentUser.conversations.forEach((element) => console.log(element));

  // const matches = Object.entries(conversations);

  return (
    <div>
      <div>
        {/* {' '}
        <h1>You have {conversations.length} matches</h1>{' '} */}
      </div>
      <div>
        {props.currentUser.preference === 'M'
          ? conversations?.map((element) => {
              return (
                <div
                  key={element.id}
                  onClick={() => props.history.push(`/messages/${element.id}`)}
                >
                  <h2>{element.title}</h2>
                  <img src={element.photo_one} />
                  <img src={element.photo_two} />
                  <button
                    onClick={async () => {
                      await axios.delete(
                        `http://localhost:8000/conversation/${element.id}`
                      );
                      alert(`${element.title} has been deleted`);
                    }}
                  >
                    Delete {element.title}
                  </button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Messages;
// user_id: `http://localhost:8000/user/${props.currentUser.id}`,
