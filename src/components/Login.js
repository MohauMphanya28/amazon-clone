import React, { useState, useReducer, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import { auth } from "../Firebase";
 
// const reducer = (state, action) => {
//   // if (action.type === "EMAIL_INPUT") {
//   //   return { ...state, emailValue: action.payload };
//   // }
//   // if (action.type === "PASS_INPUT") {
//   //   return { ...state, passwordValue: action.payload };
//   // }
//   // return {
//   //   emailValue: "",
//   //   passwordValue: "",
//   // };
// };

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const history = useHistory
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
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
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
