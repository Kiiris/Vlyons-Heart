import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileDetails = (props) => {
  const [details, setDetails] = useState([]);
  const [content, setContent] = useState(props.currentUser);
  const [matched, setMatched] = useState(false);
  const [myProfile, setProfile] = useState(false);
  const [edited, setEdited] = useState(false);
  const [clicked, setClicked] = useState(false);

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
    // alert(
    //   `you added ${props.currentUser.username} to ${details.username}'s list of liked_by's`
    // );
  };

  console.log(...props.currentUser.likes, details.username);
  console.log(props.currentUser);
  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value });
  };
  const createConversation = async () => {
    const newConversaion = {
      title: `${props.currentUser.username} & ${details.username}`,
      user: [props.currentUser.id, details.id],
      photo_one: details.photo_url,
      photo_two: props.currentUser.photo_url
    };
    await axios.post(`http://localhost:8000/conversation/`, newConversaion);
    alert(
      `New match! ${props.currentUser.username} & ${details.username} created. Check your messages!`
    );
  };
  const likeProfile = (e) => {
    e.preventDefault();
    const likedby = [...details.liked_by];
    const yourliking = [...props.currentUser.likes];
    if (
      (yourliking.includes(details.username) === true) &
      (likedby.includes(props.currentUser.username) === true)
    ) {
      alert("you've already liked this person!");
    } else if (
      (likedby.includes(props.currentUser.username) !== true) &
      (yourliking.includes(details.username) !== true)
    ) {
      updateLikes();
    }
  };
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
    setEdited(!edited);
  };

  const updateChange = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:8000/user/${props.match.params.id}`,
      content
    );
    setContent(res.data);
    alert('your profile has been changed');
  };

  const Hide = async () => {
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
      likes: props.currentUser.liked_by,
      liked_by: props.currentUser.liked_by,
      hidden: true,
      romantic: props.currentUser.romantic,
      musical: props.currentUser.musical,
      nerdy: props.currentUser.nerdy
    });
    alert('your profile has been hidden!');
  };
  console.log(props.currentUser.liked_by);
  return (
    <div>
      <h2>{details.username}'s land</h2>
      <br />
      <br />
      {myProfile ? (
        <section>
          <h1 style={{ fontSize: '2em', color: 'white' }}>
            Yo! How's it going?
          </h1>
          <br />
          {props.currentUser.liked_by.length !== 0 ? (
            <h1 style={{ fontSize: '2em', color: 'orange' }}>
              You've liked {props.currentUser.likes.length} people
            </h1>
          ) : null}
        </section>
      ) : null}
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
        ) : null}
        <p>{details.self_summary}</p>
        <p>{details.description}</p>
      </section>
      <hr />
      {myProfile ? (
        <button className="edit" onClick={editProfile}>
          {!edited ? 'Edit your Profile?' : 'Change your fields here'}
        </button>
      ) : null}
      {edited ? (
        <>
          <section>
            <form onSubmit={updateChange} className="form">
              <input
                id="email"
                type="text"
                value={content.email}
                placeholder={details.email}
                onChange={handleChange}
              />

              <input
                id="username"
                placeholder={details.username}
                value={content.username}
                onChange={handleChange}
              />
              <select
                className="gender"
                value={content.gender}
                placeholder={details.gender}
                name="gender"
                id="gender"
              >
                <option value="M">I am a Man</option>
                <option value="W">I am a Woman</option>
                <option value="N">I am Nonbinary</option>
              </select>

              <select
                className="gender"
                value={content.preference}
                placeholder={details.preference}
                name="preference"
                id="preference"
              >
                <option value="M">I Prefer Men</option>
                <option value="W">I Prefer Women</option>
                <option value="N">Both</option>
              </select>

              <input
                className="birth_year"
                id="birth_year"
                type="text"
                placeholder={details.birth_year}
                value={content.birth_year}
                onChange={handleChange}
              />

              <input
                id="location"
                placeholder={details.location}
                value={content.location}
                onChange={handleChange}
              />
              <textarea
                className="self"
                id="self_summary"
                type="text"
                value={content.self_summary}
                placeholder={details.self_summary}
                onChange={handleChange}
              />

              <textarea
                className="description"
                id="description"
                placeholder={details.description}
                value={content.description}
                onChange={handleChange}
              />
              <textarea
                className="photo"
                id="photo_url"
                value={content.photo_url}
                placeholder={details.photo_url}
                onChange={handleChange}
              />
              <button type="submit" className="submit">
                Confirm?
              </button>
            </form>
          </section>
          <section>
            <button className="DELETEbutton" onClick={Hide}>
              Disable Profile
            </button>
            <button className="DELETEbutton" onClick={deleteProfile}>
              DELETE Profile
            </button>
          </section>
        </>
      ) : null}
      {!myProfile ? (
        <div>
          <button onClick={likeProfile} className="likebutton">
            Like
          </button>
          <br />
          <button onClick={createConversation} className="edit">
            Have a chat with them!
          </button>
        </div>
      ) : null}
      <br />
    </div>
  );
};

export default ProfileDetails;
