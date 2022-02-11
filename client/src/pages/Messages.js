import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = (props) => {
  const [conversations, setConversations] = useState();
  const [messages, setMessages] = useState();
  const getConversations = async () => {
    const res = await axios.get(`http://localhost:8000/conversation`);
    setConversations(res.data);
    console.log(res.data);
  };
  const getMessages = async () => {
    const res = await axios.get(`http://localhost:8000/message`);
    setMessages(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getMessages();
    getConversations();
  }, []);
  // console.log(conversations[0].photo_one);
  // const rightConversation = conversations.filter(
  //   (element) => element.title === 'Jana & Jacob'
  // );
  // console.log(rightConversation);
  props.currentUser.conversations.forEach((element) => console.log(element));

  const postMessage = async () => {
    const newMessage = {
      content: 'I just posted this',
      reaction: 'Great!',
      conversation_id: 5,
      user_id: props.currentUser.id
    };
    await axios.post(`http://localhost:8000/message/`, newMessage);
  };

  return (
    <div>
      <div>
        {/* <h1>{conversations[0].title}</h1>
        <img src={conversations[0].photo_one} />
        <img src={conversations[0].photo_two} /> */}
      </div>
      <button onClick={postMessage}>Make a message </button>
    </div>
  );
};

export default Messages;
// user_id: `http://localhost:8000/user/${props.currentUser.id}`,
