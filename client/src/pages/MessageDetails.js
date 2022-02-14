import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageDetails = (props) => {
  const [yourMessages, setMessages] = useState([]);
  const [newMessage, setMessage] = useState('');
  const [otherParty, setParty] = useState([]);

  const getParticipants = async () => {
    const res = await axios.get(
      `http://localhost:8000/conversation/${props.match.params.id}`
    );
    getMessages();
    console.log(res.data);
    getOtherUser(res.data);
  };

  const getPickups = async () => {
    const res = await axios.get(
      `https://getpickuplines.herokuapp.com/lines/random`
    );
    setMessage(res.data);
  };
  const getOtherUser = async (participants) => {
    const otherUser = participants.user.find(
      (element) => element !== props.currentUser.id
    );

    const res = await axios.get(`http://localhost:8000/user/${otherUser}`);

    setParty(res.data);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const getMessages = async () => {
    const res = await axios.get(
      `http://localhost:8000/message/?conversation=${props.match.params.id}`
    );
    setMessages(res.data);
  };

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
    <div className="newgrid">
      <div className="detailscontainer">
        <section classNam="messagedetailsimage">
          <img
            className="messageimages"
            onClick={() => props.history.push(`/user/${props.currentUser.id}`)}
            src={props.currentUser.photo_url}
            height="200"
          />
          <img
            className="messageimage"
            onClick={() => props.history.push(`/user/${otherParty.id}`)}
            src={otherParty.photo_url}
            height="200"
          />
        </section>
        <h1>Messages</h1>
        <button className="submit" onClick={getPickups}>
          Need some inspiration?
        </button>
        {props.logged
          ? yourMessages.map((element) => {
              return (
                <div key={element.id}>
                  <section className="message_box">
                    <article>
                      {element.sender === props.currentUser.id ? (
                        <h3>{props.currentUser.username}: </h3>
                      ) : (
                        <h3>{otherParty.username}</h3>
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
            className="messagebox"
            placeholder={newMessage.line}
            value={newMessage.content}
            onChange={handleChange}
          />
          <br />
          <button className="postbutton">Make a message </button>
        </form>
      </div>
    </div>
  );
};

export default MessageDetails;
