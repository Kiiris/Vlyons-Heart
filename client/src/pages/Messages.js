import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = (props) => {
  const [conversations, setConversations] = useState();
  const getConversations = async () => {
    const res = await axios.get(`http://localhost:8000/conversation`);
    setConversations(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getConversations();
  }, []);
  console.log(props.currentUser);
  // const rightConversation = conversations.filter(
  //   (element) => element.title === 'Jana & Jacob'
  // );
  // console.log(rightConversation);
  const postMessage = async () => {
    const newMessage = {
      content: 'Hi there',
      reaction: 'Great!',
      recipient: props.currentUser,
      conversation_id: 7
    };
    await axios.post(`http://localhost:8000/message/`, newMessage);
  };
  return (
    <div>
      <button onClick={postMessage}>Make a message </button>
    </div>
  );
};

export default Messages;
