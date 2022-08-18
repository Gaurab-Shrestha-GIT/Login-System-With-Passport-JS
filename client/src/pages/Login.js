import React from "react";
import Google from "../img/google.png";
import Github from "../img/github.png";
import Facebook from "../img/facebook.png";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
