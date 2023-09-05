import { useState, useEffect, useContext } from "react";
import Profile from "../Sections/userProfile";
import Popup from "../Sections/popup";
import Skeleton from "../Sections/skeleton";
import { ThemeContext } from "../Context/ThemeContext";
import { SelectedUserContext } from "../Context/UserContext";

function Home() {
  const [users, setUsers] = useState([]);
  const [display, setDisplay] = useState([]);
  const [displayPopup, setDisplayPopup] = useState(false);

  const { isOn } = useContext(ThemeContext);
  const { selectedUser, setSelectedUser, search } =
    useContext(SelectedUserContext);

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

    document.body.style.overflow = "hidden";

    setDisplayPopup(!displayPopup);
  };

  const skeletonComponent = [];

  for (let i = 0; i < 10; i++) {
    skeletonComponent.push(<Skeleton key={i} />);
  }

  return (
    <div className={isOn ? "light" : "dark"}>
      {displayPopup && (
        <Popup
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          setDisplayPopup={setDisplayPopup}
        />
      )}
      <div className="App">
        {users.length !== 0 ? (
          <div className="container">
            {users
              .filter((user) => {
                return user.name.trim().toLowerCase().includes(search);
              })
              .map((user, index) => {
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

export default Home;
