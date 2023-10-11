import React, { useState } from "react";
import "../Login/Login.css";
import google from "../../Assets/Images/Icons/google.svg";
import facebook from "../../Assets/Images/Icons/facebook.svg";
import twitter from "../../Assets/Images/Icons/twitter.svg";
import { restaurantName } from "../../Utilities/Constansts";
import { loginUser } from "../../Http-Services/loginUser";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Slices/authSlice";
import constant from "../../Utilities/Constansts/lableConstancts.json";
import { selectAuth } from "../../Redux/Selectors/authSelector";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidCheck, setInvalidCheck] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(selectAuth);

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

      LoginData && dispatch(login(LoginData)) && setInvalidCheck(false);
      LoginData && navigate("/");
      LoginData || setInvalidCheck(true);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back</h1>
      <p>Taste the Difference at {restaurantName}</p>
      <div className="login-box">
        <div>
          <form className="login-form">
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
              Remember Password <input type="checkbox" />
            </label>

            <Link to="/">
              <label>Forgot Password?</label>
            </Link>
          </form>
          {isAuthenticated && (
            <h3 style={{ color: "white", fontWeight: 500 }}>
              Logged in successfully
            </h3>
          )}
          {invalidCheck && (
            <h3 style={{ color: "red", fontWeight: 500 }}>
              Invalid Credentials
            </h3>
          )}
          <button className="LoginBtn" onClick={handleSubmit}>
            {constant.login.login}
          </button>
          <br />
          <button className="signupBtn">{constant.login.signUp}</button>

          <div className="continue-with">
            <hr />
            <p>or continue with</p>
            <hr />
          </div>

          <div>
            <img className="login-logo" src={google} alt="" />
            <img className="login-logo" src={facebook} alt="" />
            <img className="login-logo" src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
