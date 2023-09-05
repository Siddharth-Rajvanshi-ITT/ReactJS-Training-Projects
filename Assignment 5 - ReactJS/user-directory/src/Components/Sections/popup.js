import React, { useState } from "react";

export const Popup = (props) => {
  const [user, setUser] = useState({
    username: props.selectedUser.name,
    email: props.selectedUser.email,
    phoneNumber: props.selectedUser.phone,
    company: props.selectedUser.company,
    website: props.selectedUser.website,
    address: props.selectedUser.address,
    skills: props.selectedUser.skills,
  });

  const handleUser = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = props.selectedUser;

    userData.name = user.username;
    userData.email = user.email;
    userData.phone = user.phoneNumber;
    userData.company = user.company;
    userData.website = user.website;
    userData.address = user.address;
    userData.skills = user.skills.toString().split(/[, ]/);

    props.setSelectedUser(userData);

    props.setDisplayPopup(false);

    document.body.style.overflow = "scroll";
  };

  return (
    <div
      className="blurBG"
      onClick={(event) => {
        props.setDisplayPopup(false);
        document.body.style.overflow = "scroll";
      }}
    >
      {props.selectedUser && (
        <div className="popup" onClick={(event) => event.stopPropagation()}>
          <h3>Edit User Details</h3>

          <i
            className="fa-solid fa-x closePopup"
            onClick={() => {
              props.setDisplayPopup(false);
              document.body.style.overflow = "scroll";
            }}
          ></i>

          <form className="inputForm" onSubmit={handleSubmit}>
            <label className="inputDetail">
              Username:
              <br />
              <input
                type="text"
                value={user.username}
                name="username"
                onChange={handleUser}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Email:
              <br />
              <input
                type="email"
                value={user.email}
                name="email"
                onChange={handleUser}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Phone Number:
              <br />
              <input
                type="number"
                value={user.phoneNumber}
                name="phoneNumber"
                onChange={handleUser}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Company:
              <br />
              <input
                type="text"
                value={user.company}
                name="company"
                onChange={handleUser}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Website:
              <br />
              <input
                type="text"
                value={user.website}
                name="website"
                onChange={handleUser}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Address:
              <br />
              <input
                type="text"
                value={user.address}
                name="address"
                onChange={handleUser}
                required
              ></input>
            </label>
            <label className="inputDetail">
              Skills:
              <br />
              <input
                type="text"
                value={user.skills}
                name="skills"
                onChange={handleUser}
                required
              ></input>
            </label>
            <input type="submit" className="submitDetailsButton"></input>
          </form>
        </div>
      )}
    </div>
  );
};

export default Popup;
