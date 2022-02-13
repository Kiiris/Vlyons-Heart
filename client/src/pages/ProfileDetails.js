import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileDetails = (props) => {
  const [details, setDetails] = useState([]);
  const [content, setContent] = useState('');
  const [matched, setMatched] = useState(false);
  const [myProfile, setProfile] = useState(false);
  const [edited, setEdited] = useState(false);
  const [confirm, setConfirmed] = useState(false);

  const getDetails = async () => {
    const res = await axios.get(
      `http://localhost:8000/user/${props.match.params.id}`
    );
    setDetails(res.data);
    if (res.data.id === props.currentUser.id) {
      setProfile(true);
    }
    const likedby = [...res.data.liked_by];
    const theirbody = [...res.data.likes];
    const yourliking = [...props.currentUser.likes];
    const finalliking = [...props.currentUser.liked_by];

    console.log(likedby);
    console.log(theirbody);
    console.log(yourliking);
    console.log(finalliking);
    if (
      (yourliking.includes(details.username) === true) &
      (finalliking.includes(details.username) === true) &
      ((theirbody.includes(props.currentUser.username) === true) &
        (likedby.includes(props.currentUser.username) === true))
    ) {
      setMatched(true);
    }
  };
  const updateLikes = async () => {
    const addLike = [...props.currentUser.likes, details.username];
    const ablebody = [...details.liked_by, props.currentUser.username];
    await axios.put(`http://localhost:8000/user/${props.currentUser.id}`, {
      email: props.currentUser.email,
      username: props.currentUser.username,
      password: props.currentUser.password,
      gender: props.currentUser.gender,
      preference: props.currentUser.preference,
      birth_year: props.currentUser.birth_year,
      location: props.currentUser.location,
      description: props.currentUser.description,
      photo_url: props.currentUser.photo_url,
      likes: addLike,
      liked_by: details.liked_by
    });
    alert(
      `you added ${details.username} to ${props.currentUser.username}'s list of likes`
    );
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
      liked_by: ablebody
    });
    alert(
      `you added ${props.currentUser.username} to ${details.username}'s list of liked_by's`
    );
  };

  console.log(...props.currentUser.likes, details.username);
  console.log(props.currentUser);
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
    const likedby = [...details.liked_by];
    const yourliking = [...props.currentUser.likes];
    if (
      (yourliking.includes(details.username) === true) &
      (likedby.includes(props.currentUser.username) === true)
    ) {
      console.log("you've already liked them!");
    } else if (
      (likedby.includes(props.currentUser.username) !== true) &
      (yourliking.includes(details.username) !== true)
    ) {
      updateLikes();
    }
  };

  console.log(props.currentUser);
  console.log(details);

  const deleteProfile = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8000/user/${props.match.params.id}`);
    alert('profile deleted');
  };
  useEffect(() => {
    getDetails();
  }, []);

  const editProfile = (e) => {
    //EDIT this later hehe
    setEdited(true);
  };

  const unconfirm = (e) => {
    e.preventDefault();
    setConfirmed(false);
  };

  const confirmButton = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };
  return (
    <div>
      <h2>{details.username}'s land</h2>
      {myProfile ? <h1>Yo! How's it going?</h1> : null}
      {matched ? <h1>You matched with {details.username}! </h1> : null}
      {details.album
        ? details.album.map((element) => {
            return (
              <div>
                <h2>Album Photos</h2>{' '}
                <img src={element} height="250" width="300" />
              </div>
            );
          })
        : null}

      <img
        src={details.photo_url}
        className="profilephoto"
        height="250"
        width="300"
      />
      <section>
        <h2>Self Summary</h2>
        {details.self_summary === '' ? (
          <p>Looks like they're the strong silent type..</p>
        ) : null}{' '}
        <p>{details.selfsummary}</p>
        <p>{details.description}</p>
      </section>
      <hr />
      {myProfile ? (
        <button onClick={editProfile}>Edit your Profile?</button>
      ) : null}
      {edited ? (
        <section>
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
            />
          </form>
          <button onClick={confirmButton}> Delete Profile</button>
        </section>
      ) : null}
      {!myProfile ? (
        <button onClick={likeProfile} className="editbutton">
          Like
        </button>
      ) : null}
      <br />
      {confirm ? (
        <section>
          <button
            className="confirm-bg"
            onClick={() => {
              const confirmBox = window.confirm(
                'Do you really want to delete this Crumb?'
              );
              if (confirmBox === true) {
                deleteProfile();
              }
            }}
          ></button>
        </section>
      ) : null}
    </div>
  );
};

export default ProfileDetails;
