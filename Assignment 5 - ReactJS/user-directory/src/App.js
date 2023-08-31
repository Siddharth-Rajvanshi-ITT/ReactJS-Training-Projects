import "./App.css";
import { useState, useEffect } from "react";
import Profile from "./Components/userProfile";
import Popup from "./Components/popup";
import Skeleton from "./Components/skeleton";

function App() {
  const [users, setUsers] = useState([]);
  const [display, setDisplay] = useState([]);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8484/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setUsers(data.data);
          setDisplay(Array(data.data.length).fill(true));
        }, 2000);
      })
      .catch((err) => {
        console.log("Error in fetching data" + err);
      });
  }, []);

  const handleClick = (user) => {
    if (!displayPopup) setSelectedUser(user);
    else setSelectedUser(null);

    setDisplayPopup(!displayPopup);
  };

  const skeletonComponent = [];

  for (let i = 0; i < 10; i++) {
    skeletonComponent.push(<Skeleton />);
  }

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
        {users.length !== 0 ? (
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
        ) : (
          <div className="container">{skeletonComponent}</div>
        )}
      </div>
    </div>
  );
}

export default App;
