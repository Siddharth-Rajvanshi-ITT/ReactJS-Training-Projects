import React, { useState } from "react";

export const Popup = (props) => {
  const [username, setUsername] = useState(props.selectedUser.name);
  const [email, setEmail] = useState(props.selectedUser.email);
  const [phoneNumber, setPhoneNumber] = useState(props.selectedUser.phone);
  const [company, setCompany] = useState(props.selectedUser.company);
  const [website, setWebsite] = useState(props.selectedUser.website);
  const [address, setAddress] = useState(props.selectedUser.address);
  const [skills, setSkills] = useState(props.selectedUser.skills);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleWebsite = (event) => {
    setWebsite(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleSkills = (event) => {
    setSkills(event.target.value.split(/[, ]/));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const userData = props.selectedUser;

    userData.name = username;
    userData.email = email;
    userData.phone = phoneNumber;
    userData.company = company;
    userData.website = website;
    userData.address = address;
    userData.skills = skills;

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
                value={username}
                onChange={handleUsername}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Email:
              <br />
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Phone Number:
              <br />
              <input
                type="number"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Company:
              <br />
              <input
                type="text"
                value={company}
                onChange={handleCompany}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Website:
              <br />
              <input
                type="text"
                value={website}
                onChange={handleWebsite}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Address:
              <br />
              <input
                type="text"
                value={address}
                onChange={handleAddress}
                required
              ></input>
            </label>
            <label className="inputDetail">
              Skills (Coma separated):
              <br />
              <input
                type="text"
                value={skills}
                onChange={handleSkills}
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
