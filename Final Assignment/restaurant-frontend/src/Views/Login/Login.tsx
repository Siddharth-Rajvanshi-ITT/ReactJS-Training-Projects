import React, { useState } from "react";
import styles from "./Login.module.css";
import google from "../../Assets/Images/Icons/google.svg";
import facebook from "../../Assets/Images/Icons/facebook.svg";
import twitter from "../../Assets/Images/Icons/twitter.svg";
import { loginUser } from "../../Http-Services/loginUser";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/Slices/authSlice";
import constant from "../../Utilities/Constansts/lableConstancts.json";
import { selectAuth } from "../../Redux/Selectors/authSelector";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidCheck, setInvalidCheck] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAuthenticated, rememberUser } = useSelector(selectAuth);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const loginCheck = async () => {
      const data = await loginUser({
        username: username,
        password: password,
      });
      return data?.data;
    };

    if (
      e.type === "click" ||
      (e.type === "keydown" && (e as React.KeyboardEvent).key === "Enter")
    ) {
      const LoginData = await loginCheck();

      LoginData && dispatch(actions.login(LoginData)) && setInvalidCheck(false);
      LoginData && navigate("/");
      rememberUser && localStorage.setItem("username", username);
      LoginData || setInvalidCheck(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isClicked = e.target.checked;
    isClicked && dispatch(actions.rememberUser());
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.headingLogin}>Welcome Back</h1>
      <p>Taste the Difference at {constant.restaurantDetails.restaurantName}</p>
      <div className={styles.loginBox}>
        <div>
          <form className={styles.loginForm}>
            <input
              type="text"
              placeholder="Username or Email"
              onChange={handleUsernameChange}
              onKeyDown={(e) => handleSubmit(e)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              onKeyDown={(e) => handleSubmit(e)}
            ></input>
            <label>
              {constant.login.rememberMe}{" "}
              <input type="checkbox" onChange={handleChange} />
            </label>

            <Link to="/">
              <label>{constant.login.forgotPassword}</label>
            </Link>
          </form>
          {isAuthenticated && (
            <h3 style={{ color: "white", fontWeight: 500 }}>
              {constant.login.successfulLoginMessage}
            </h3>
          )}
          {invalidCheck && (
            <h3 style={{ color: "red", fontWeight: 600 }}>
              {constant.login.loginErrorMessage}
            </h3>
          )}
          <button className={styles.LoginBtn} onClick={handleSubmit}>
            {constant.login.login}
          </button>
          <br />
          <button className={styles.signupBtn}>{constant.login.signUp}</button>

          <div className={styles.continueWith}>
            <hr />
            <p>or continue with</p>
            <hr />
          </div>

          <div>
            <img className={styles.loginLogo} src={google} alt="" />
            <img className={styles.loginLogo} src={facebook} alt="" />
            <img className={styles.loginLogo} src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
