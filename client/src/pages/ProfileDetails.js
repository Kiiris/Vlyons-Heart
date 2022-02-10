import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileDetails = (props) => {
  const [details, setDetails] = useState([]);
  const [content, setContent] = useState('');
  const [matched, setMatched] = useState(false);

  const getDetails = async () => {
    const res = await axios.get(
      `http://localhost:8000/user/${props.match.params.id}`
    );
    setDetails(res.data);
    // console.log(res.data);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  console.log(props.currentUser.likes);
  console.log(details.liked_by);
  const likeProfile = async (e) => {
    e.preventDefault();

    const likesbody = [...details.liked_by, props.currentUser.username];
    likesbody.includes(props.currentUser.username)
      ? console.log("you've already liked this person")
      : await axios.put(`http://localhost:8000/user/${props.match.params.id}`, {
          email: details.email,
          username: details.username,
          password: details.password,
          gender: details.gender,
          preference: details.preference,
          birth_year: details.birth_year,
          location: details.location,
          description: content,
          photo_url: details.photo_url,
          likes: details.likes,
          liked_by: likesbody
        });
  };
  const mylikesbody = [...props.currentUser.liked_by];
  const username = details.username;
  const result = mylikesbody.includes(username);
  console.log(result);
  console.log(mylikesbody);

  const insertObject = (arr, obj) => {
    arr.push(obj);
  };
  const newparticipant = [];
  insertObject(newparticipant, props.currentUser);
  insertObject(newparticipant, details);
  console.log(newparticipant);
  const createConversation = async (e) => {
    const newConversaion = {
      title: `${props.currentUser.username} & ${details.username}`,
      newparticipant
    };
    e.preventDefault();

    await axios.post(`http://localhost:8000/conversation/`, newConversaion);
  };

  console.log(props.currentUser);
  console.log(details);
  // console.log(details.liked_by.includes(''));
  // console.log(props.currentUser.username);
  const deleteProfile = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8000/user/${props.match.params.id}`);
    window.location.reload();
    alert('profile deleted');
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      <img src={details.photo_url} />
      {/* <button onClick={deleteProfile}> Delete Profile</button> */}
      {/* <input
          id="email"
          type="text"
          value={content.email}
          placeholder={details.email}
          onChange={handleChange}
        />

        <textarea
          id="username"
          placeholder={details.username}
          value={content.username}
          onChange={handleChange}
        />
        <input
          id="gender"
          type="text"
          placeholder={details.gender}
          value={content.gender}
          onChange={handleChange}
        />

        <textarea
          id="preference"
          value={content.preference}
          placeholder={details.preference}
          onChange={handleChange}
        />
        <input
          id="birth_year"
          type="text"
          placeholder={details.birth_year}
          value={content.birth_year}
          onChange={handleChange}
        />

        <textarea
          id="location"
          placeholder={details.location}
          value={content.location}
          onChange={handleChange}
        />
        <input
          id="self_summary"
          type="text"
          value={content.self_summary}
          placeholder={details.self_summary}
          onChange={handleChange}
        /> */}
      <form onSubmit={likeProfile}>
        <textarea
          id="description"
          placeholder={details.description}
          value={content.description}
          onChange={handleChange}
        />
        <button className="editbutton">Like</button>
      </form>
      <br />
      <button onClick={createConversation}>createConversation</button>
      {/* <textarea
          id="photo_url"
          value={content.photo_url}
          placeholder={details.photo_url}
          onChange={handleChange}
        /> */}
      <br />
    </div>
  );
};

export default ProfileDetails;
