import "./App.css";
import { useState } from "react";
import users from "./Data/userData";
import Profile from "./Components/userProfile";
import Popup from "./Components/popup";

function App() {
  const [display, setDisplay] = useState(Array(users.length).fill(true));
  const [displayPopup, setDisplayPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    if (!displayPopup) setSelectedUser(user);
    else setSelectedUser(null);

    setDisplayPopup(!displayPopup);
  };

  return (
    <div>
      {displayPopup && (
        <Popup
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          setDisplayPopup={setDisplayPopup}
        />
      )}
      <div className="App">
        <div className="header"></div>

        <div className="container">
          {users.map((user, index) => {
            if (display[user.id - 1])
              return (
                <Profile
                  key={user.id}
                  user={user}
                  display={display}
                  setDisplay={setDisplay}
                  handleClick={handleClick}
                />
              );

            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
