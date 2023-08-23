import React, { useState } from "react";

export const Popup = (props) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [company, setCompany] = useState();
  const [website, setWebsite] = useState();
  const [address, setAddress] = useState();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = props.selectedUser;

    userData.name = username;
    userData.email = email;
    userData.phoneNumber = phoneNumber;
    userData.company = company;
    userData.website = website;
    userData.address = address;

    props.setSelectedUser(userData);

    props.setDisplayPopup(false);
  };

  return (
    <>
      {props.selectedUser && (
        <div className="popup">
          <h3>Edit User Details</h3>

          <i
            className="fa-solid fa-x closePopup"
            onClick={() => props.setDisplayPopup(false)}
          ></i>

          <form className="inputForm" onSubmit={handleSubmit}>
            <label className="inputDetail">
              Username:
              <br />
              <input type="text" onChange={handleUsername} required></input>
            </label>
            <br />
            <label className="inputDetail">
              Email:
              <br />
              <input type="email" onChange={handleEmail} required></input>
            </label>
            <br />
            <label className="inputDetail">
              Phone Number:
              <br />
              <input
                type="number"
                onChange={handlePhoneNumber}
                required
              ></input>
            </label>
            <br />
            <label className="inputDetail">
              Company:
              <br />
              <input type="text" onChange={handleCompany} required></input>
            </label>
            <br />
            <label className="inputDetail">
              Website:
              <br />
              <input type="text" onChange={handleWebsite} required></input>
            </label>
            <br />
            <label className="inputDetail">
              Address:
              <br />
              <input type="text" onChange={handleAddress} required></input>
            </label>
            <input type="submit" className="submitDetailsButton"></input>
          </form>
        </div>
      )}
    </>
  );
};

export default Popup;
