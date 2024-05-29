import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }
  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }

  return {
    emailValue: "",
    passwordValue: "",
  };
};

const Login = (onLogin) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });

  const {emailValue: email, passwordValue: password} = state

  useEffect (() => {
    const identifier = setTimeout(() => {
      setFormIsValid(state.emailValue.includes("@") && state.passwordValue.trim().length > 6);
    }, 500);
    return () => {
      clearTimeout(identifier)
    }
  },[email, password])

  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  };

  const signIn = (e) => {
    e.prefentDefault();
    onLogin(state.emailValue, state.passwordValue)
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
            value={email}
            onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
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
