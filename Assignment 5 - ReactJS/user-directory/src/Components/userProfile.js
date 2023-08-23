import React, { useState } from "react";
import Skills from "./skills";

const Profile = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div>
      <div className="profile">
        <img
          className="userProfilePic"
          src={props.user.profile_image}
          alt="User profile pic"
        ></img>
        <h2>{props.user.name}</h2>
        <p>{props.user.email}</p>
        <p>{props.user.phone}</p>
        <p>{props.user.company}</p>
        <p>{props.user.website}</p>
        <p>{props.user.address}</p>

        <Skills skills={props.user.skills} />

        <div className="customize">
          <div
            onClick={() => {
              setIsFavourite(!isFavourite);
            }}
          >
            {isFavourite ? (
              <i className="fa-solid fa-heart fav"></i>
            ) : (
              <i className="fa-regular fa-heart fav"></i>
            )}
          </div>

          <div onClick={() => props.handleClick(props.user)}>
            <i className="fa-solid fa-pen-to-square editIcon"></i>
          </div>

          <div
            onClick={() => {
              props.setDisplay(() => {
                const newDisplay = [...props.display];
                newDisplay[props.user.id - 1] = !newDisplay[props.user.id - 1];
                return newDisplay;
              });
            }}
          >
            <i className="fa-solid fa-trash editIcon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
