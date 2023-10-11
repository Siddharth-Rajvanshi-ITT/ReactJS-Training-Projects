import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Images/Logos/Logos.jpg";
import { restaurantName } from "../../Utilities/Constansts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Slices/authSlice";
import { selectAuth } from "../../Redux/Selectors/authSelector";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="Navbar">
      <div className="navLogo">
        <img src={logo} alt="" />
        <h2>{restaurantName}</h2>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart</Link>
        {!isAuthenticated ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/profile">{user?.username}</Link>
        )}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Navbar;
