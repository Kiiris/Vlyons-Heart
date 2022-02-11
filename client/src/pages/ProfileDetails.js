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
    if (res.data.id === props.currentUser.id) {
      setProfile(true);
    }
    // console.log(res.data);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const likeProfile = async (e) => {
    e.preventDefault();
    const likesbody = [...details.liked_by, props.currentUser.username];
    if (likesbody.includes(props.currentUser.username)) {
      setMatched(true);

      const newConversaion = {
        title: `${props.currentUser.username} & ${details.username}`,
        user: [props.currentUser.id, details.id],
        photo_one: details.photo_url,
        photo_two: props.currentUser.photo_url
      };

      await axios.post(`http://localhost:8000/conversation/`, newConversaion);
    } else {
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
      {myProfile ? (
        <button onClick={deleteProfile}> Delete Profile</button>
      ) : null}
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
      {myProfile ? (
        <form>
          <textarea
            id="description"
            placeholder={details.description}
            value={content.description}
            onChange={handleChange}
          />
        </form>
      ) : null}
      <button onSubmit={likeProfile} className="editbutton">
        Like
      </button>
      <br />
      {/* <button onClick={createConversation}>createConversation</button> */}
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
