import { useContext } from "react";
import { SelectedUserContext } from "../Context/UserContext";
import { ThemeContext } from "../Context/ThemeContext";
import Skills from "../Sections/skills";

const UserDetails = () => {
  const { selectedUser } = useContext(SelectedUserContext);
  const { isOn } = useContext(ThemeContext);

  return (
    <div className={isOn ? "light userDetail" : "dark userDetail"}>
      <div className="userDetailContainer">
        <img
          className="userProfilePic"
          src={selectedUser.profile_image}
          alt="User profile pic"
        ></img>
        <h1>{selectedUser.name}</h1>
        <div className="displayDetails">
          <div>
            <i className="fa-solid fa-envelope editIcon"></i>
            <p>{selectedUser.email}</p>
          </div>
          <div>
            <i className="fa-solid fa-phone editIcon"></i>
            <p>{selectedUser.phone}</p>
          </div>
          <div>
            <i className="fa-solid fa-building editIcon"></i>
            <p>{selectedUser.company}</p>
          </div>
          <div>
            <i className="fa-solid fa-link editIcon"></i>
            <p>{selectedUser.website}</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-house editIcon"></i>
          <p>{selectedUser.address}</p>
        </div>
        <Skills skills={selectedUser.skills} />
      </div>
    </div>
  );
};

export default UserDetails;
