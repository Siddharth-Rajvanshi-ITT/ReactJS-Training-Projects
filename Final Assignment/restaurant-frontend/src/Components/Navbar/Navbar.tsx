import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../Assets/Images/Logos/Logos.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/Slices/authSlice";
import { selectAuth } from "../../Redux/Selectors/authSelector";
import constants from "../../Utilities/Constansts/lableConstancts.json";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(actions.logout());
    localStorage.removeItem("username");
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="" />
        <h2>{constants.restaurantDetails.restaurantName}</h2>
      </div>
      <div className={styles.menu}>
        <Link to="/">{constants.menu.home}</Link>
        <Link to="/about">{constants.menu.aboutUs}</Link>
        <Link to="/cart">{constants.menu.cart}</Link>
        {!isAuthenticated ? (
          <Link to="/login">{constants.login.login}</Link>
        ) : (
          <Link to="/profile">{user?.username}</Link>
        )}
        {isAuthenticated && (
          <button onClick={handleLogout}>{constants.logout.logout}</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
