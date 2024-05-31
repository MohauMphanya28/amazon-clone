import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/ProductDetails";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Basket from "./components/Basket";
import PageNotFound from "./components/PageNotFound";
import { useEffect, useState } from "react";
import AuthContext from "./context/authContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");

    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn("false");
  };

  return (
    <AuthContext.Provider  value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/product-details/:id" exact>
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Login onLogin={loginHandler} />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </AuthContext.Provider>
  );
};

export default App;

// Checkout (isLogin) > Payment (isLogin) > PaidOrder (isLogin)
