import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const signIn = (e) => {
    e.prefentDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
          alt=""
          className="login-logo"
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            ref={emailRef}
          />
          <h5>Password</h5>
          <input
            type="password"
            ref={passwordRef}
          />
          <button type="submit" className="login-signInButton" onClick={signIn}>
            Sign In
          </button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Coockies Notice ans our
            Interest-Based Ads Notice
          </p>
          <button className="login-registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
