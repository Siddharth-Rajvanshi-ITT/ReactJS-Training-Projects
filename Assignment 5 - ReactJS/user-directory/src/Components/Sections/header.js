import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { SelectedUserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { isOn, setIsOn } = useContext(ThemeContext);
  const { setSearch } = useContext(SelectedUserContext);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase().trim());
  };

  return (
    <div className={isOn ? "light" : "dark"}>
      <div className="header">
        <div className="navmenu">
          <Link to={"/"} className="navitem">
            Home
          </Link>
          {/* <Link to={"/userdetails"}>User Details</Link> */}
        </div>
        <input
          type="text"
          className="searchBar"
          placeholder="Search..."
          onChange={(event) => {
            handleSearch(event);
          }}
        />
        <div>
          {isOn ? (
            <i
              className="fa-solid fa-moon switch"
              onClick={() => {
                setIsOn(!isOn);
              }}
            ></i>
          ) : (
            <i
              className="fa-regular fa-sun switch"
              onClick={() => {
                setIsOn(!isOn);
              }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
