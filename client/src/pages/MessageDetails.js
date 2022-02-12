import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageDetails = (props) => {
  const [yourMessages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [newMessage, setMessage] = useState('');
  const [otherParty, setParty] = useState([]);

  const getParticipants = async () => {
    const res = await axios.get(
      `http://localhost:8000/conversation/${props.match.params.id}`
    );
    setParticipants(res.data);
    getOtherUser();
    getMessages();
    console.log(res.data.user);
  };

  const getOtherUser = async () => {
    const auser = participants.user;
    const otherUser = auser.find((element) => element !== props.currentUser.id);
    const res = await axios.get(`http://localhost:8000/user/${otherUser}`);
    console.log(res.data);
    setParty(res.data);
  };
  console.log(props.currentUser);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const getMessages = async () => {
    const res = await axios.get(
      `http://localhost:8000/message/?conversation=${props.match.params.id}`
    );
    setMessages(res.data);
    console.log(res.data);
  };
  function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
  }
  console.log(getParameter('messages'));

  const found = yourMessages.find((element) => element.conversation);
  const postMessage = async (e) => {
    e.preventDefault();
    const message = {
      content: newMessage,
      reaction: 'Great!',
      conversation_id: found.conversation,
      conversation: found.conversation,
      sender: props.currentUser.id
    };
    await axios.post(`http://localhost:8000/message/`, message);
    alert('posted message');
  };

  useEffect(() => {
    getParticipants();
  }, []);

  return (
    <div>
      <img
        onClick={() => props.history.push(`/user/${props.currentUser.id}`)}
        src={props.currentUser.photo_url}
      />
      <img
        onClick={() => props.history.push(`/user/${participants.id}`)}
        src={otherParty.photo_url}
      />
      <h1>Messages</h1>
      {props.logged
        ? yourMessages.map((element) => {
            return (
              <div key={element.id}>
                <h3>
                  {element.sender === props.currentUser.id ? (
                    <h3>{props.currentUser.username}: </h3>
                  ) : (
                    <h3>{participants.username}</h3>
                  )}
                  {element.content}
                </h3>
              </div>
            );
          })
        : null}
      <form onSubmit={postMessage}>
        <textarea value={newMessage.content} onChange={handleChange} />
        <br />
        <button>Make a message </button>
      </form>
    </div>
  );
};

export default MessageDetails;
