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
    event.stopPropagation();

    const userData = props.selectedUser;

    userData.name = user.username;
    userData.email = user.email;
    userData.phone = user.phoneNumber;
    userData.company = user.company;
    userData.website = user.website;
    userData.address = user.address;
    userData.skills = user.skills.split(/[, ]/);

    props.setSelectedUser(userData);

    props.setDisplayPopup(false);
  };

  return (
    <div className="blurBG" onClick={(event) => props.setDisplayPopup(false)}>
      {props.selectedUser && (
        <div className="popup" onClick={(event) => event.stopPropagation()}>
          <h3>Edit User Details</h3>

          <i
            className="fa-solid fa-x closePopup"
            onClick={() => props.setDisplayPopup(false)}
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
              Skills (Coma separated):
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
