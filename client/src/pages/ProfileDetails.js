import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileDetails = (props) => {
  const [details, setDetails] = useState([]);
  const [content, setContent] = useState('');
  const [matched, setMatched] = useState(false);
  const [myProfile, setProfile] = useState(false);

  const getDetails = async () => {
    const res = await axios.get(
      `http://localhost:8000/user/${props.match.params.id}`
    );
    setDetails(res.data);
    console.log(res.data.liked_by);
    if (res.data.id === props.currentUser.id) {
      setProfile(true);
    }
    const somebody = [...res.data.liked_by];
    const yourbody = [...res.data.likes];
    console.log(somebody);
    console.log(res.data.likes);
    if (
      (somebody.includes(props.currentUser.username) === true) &
      (yourbody.includes(props.currentUser.username) === true)
    ) {
      setMatched(true);
    }
  };
  const likeHuman = async () => {
    const likesbody = [...details.liked_by, props.currentUser.username];
    await axios.put(`http://localhost:8000/user/${props.match.params.id}`, {
      email: details.email,
      username: details.username,
      password: details.password,
      gender: details.gender,
      preference: details.preference,
      birth_year: details.birth_year,
      location: details.location,
      description: details.description,
      photo_url: details.photo_url,
      likes: details.likes,
      liked_by: likesbody
    });
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const createConversation = async () => {
    const newConversaion = {
      title: `${props.currentUser.username} & ${details.username}`,
      user: [props.currentUser.id, details.id],
      photo_one: details.photo_url,
      photo_two: props.currentUser.photo_url
    };
    await axios.post(`http://localhost:8000/conversation/`, newConversaion);
  };
  const likeProfile = (e) => {
    e.preventDefault();

    if (matched) {
      createConversation();
    } else {
      likeHuman();
    }
  };

  console.log(props.currentUser);
  console.log(details);

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
      {myProfile ? (
        <h1>This is your profile, {props.currentUser.username}</h1>
      ) : null}
      {matched ? <h1>You matched! </h1> : null}
      <img src={details.photo_url} />
      <h1> self summary:</h1> <p>{details.selfsummary}</p>
      <p>{details.description}</p>
      {myProfile ? (
        <section>
          <button onClick={deleteProfile}> Delete Profile</button>
          <h4>Change your fields here</h4>
          <input
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
          />
          <form>
            <textarea
              id="description"
              placeholder={details.description}
              value={content.description}
              onChange={handleChange}
            />
            <textarea
              id="photo_url"
              value={content.photo_url}
              placeholder={details.photo_url}
              onChange={handleChange}
            />{' '}
          </form>
        </section>
      ) : null}
      {!myProfile ? (
        <button onClick={likeProfile} className="editbutton">
          Like
        </button>
      ) : null}
      <br />
    </div>
  );
};

export default ProfileDetails;
