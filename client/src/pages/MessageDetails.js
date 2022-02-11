import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageDetails = (props) => {
  const [yourMessages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [newMessage, setMessage] = useState('');

  // const otherUser = yourMessages.filter(
  //   (element) => element.sender != props.currentUser.id
  // );
  // const findings = otherUser.find((element) => element);
  // console.log(findings.sender);

  // const getParticipants = async () => {
  //   const res = await axios.get(
  //     `http://localhost:8000/user/${findings.sender}`
  //   );
  //   setParticipants(res.data);
  //   console.log(res.data);
  // };

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
    getMessages();
    // getParticipants();
  }, []);

  return (
    <div>
      <img
        // onClick={() => props.history.push(`/user/${props.currentUser.id}`)}
        src={props.currentUser.photo_url}
      />
      <img
        // onClick={() => props.history.push(`/user/${participants.id}`)}
        src={participants.photo_url}
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
                    <h3>They sent:</h3>
                  )}{' '}
                  {element.content}
                </h3>
              </div>
            );
          })
        : null}
      <form onSubmit={postMessage}>
        <textarea value={newMessage.content} onChange={handleChange} />
        <button>Make a message </button>
      </form>
    </div>
  );
};

export default MessageDetails;
