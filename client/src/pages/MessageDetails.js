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
    getMessages();
    getOtherUser();
    console.log(participants);
    console.log(res.data);
    console.log(res.data.user);
  };

  const getOtherUser = async () => {
    const otherUser = participants.user.find(
      (element) => element !== props.currentUser.id
    );
    console.log(otherUser);
    const res = await axios.get(`http://localhost:8000/user/${otherUser}`);
    console.log(res.data);

    setParty(res.data);
  };
  console.log(props.currentUser);
  console.log('something ');
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

  // const makeParticipants = async () => {
  //   element = axios.get(
  //     `http://localhost:8000/conversation/${props.match.params.id}`
  //   );
  //   setParticipants(element.data).then(
  //     (otherUser = participants.user.find(
  //       (element) => element !== props.currentUser.id,
  //       (res = await axios.get(`http://localhost:8000/user/${otherUser}`)),
  //       console.log(res.data),
  //       setParty(res.data).then(
  //         ((response = await axios.get(
  //           `http://localhost:8000/message/?conversation=${props.match.params.id}`
  //         )),
  //         setMessages(response.data),
  //         console.log(response.data))
  //       )
  //     ))
  //   );
  // };

  // const found = yourMessages.find((element) => element.conversation);
  const postMessage = async (e) => {
    e.preventDefault();
    var currentUrl = window.location.href;
    let newStr = parseInt(currentUrl.substring(currentUrl.length - 2));
    const message = {
      content: newMessage,
      reaction: 'Great!',
      conversation_id: newStr,
      conversation: newStr,
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
                <section className="message_box">
                  <article>
                    {element.sender === props.currentUser.id ? (
                      <h3>{props.currentUser.username}: </h3>
                    ) : (
                      <h3>{participants.username}</h3>
                    )}
                    {element.content}
                  </article>
                </section>
              </div>
            );
          })
        : null}
      <form onSubmit={postMessage}>
        <textarea
          value={newMessage.content}
          onChange={handleChange}
          size="50"
        />
        <br />
        <button>Make a message </button>
      </form>
    </div>
  );
};

export default MessageDetails;
