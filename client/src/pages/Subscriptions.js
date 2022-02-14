import React from 'react';

const Subscriptions = (props) => {
  return (
    <div>
      {props.logged ? (
        <>
          <h1 className="hometex"> About the Author </h1>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGiDhNVc7za-g/profile-displayphoto-shrink_100_100/0/1611689852626?e=1645660800&v=beta&t=-kjQBTAJj4M0vaS7dT3lt6Rk4kqM7OoROial9nRpFdw"
            width="110"
            height="110"
          />
          <hr />
          <br />
          <section className="psections">
            <article>
              <p className="abouttext">
                The Developer's name is Calvin Menyfield
              </p>
              <p>
                My goal with this capstone will be to utulize a complex set of
                models to create a very engaging and delightful user experience.
                I want to understand the relationships between message
                interaction since it is so prevelant in today's world, so that I
                can be better prepared for what's out there. My full CRUD will
                give users the ability to create, update, find new users and
                delete (or disable!) their own accounts in addition to creating,
                deleting, and updating their own resume of people they add to
                the conversations they make! Upon "liking" another user, that
                will be stored in the database, and if there is a match, logic
                will be setup that creates new conversations, and true
                connections can take place. If I get all of those goals set up
                in a reasonable time frame, I have even more ideas I want to
                implement to make the website more customized, more accessible,
                more responsive, and just more enjoyable to be involved in!
              </p>
            </article>
            <ul className="sociallinks">
              <li>
                <a href="https://www.linkedin.com/in/calvin-menyfield/">
                  <img
                    alt="LinkedIn"
                    src="https://www.pngrepo.com/png/103404/512/linkedin-logo.png"
                    width="80"
                    height="70"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/Kiiris/">
                  <img
                    alt="GitHub"
                    src="https://img.favpng.com/4/20/21/github-computer-icons-icon-design-png-favpng-KaDTwuHWgG8D1qn47QW2hK7Gj.jpg"
                    width="80"
                    height="70"
                  />
                </a>
              </li>
              <li>
                <a href="https://trello.com/userworkspace52981285">
                  <img
                    alt="Trello"
                    src="https://cdn3.iconfinder.com/data/icons/inficons/512/trello.png"
                    width="80"
                    height="70"
                  />
                </a>
              </li>
            </ul>
          </section>
        </>
      ) : null}
    </div>
  );
};
export default Subscriptions;
