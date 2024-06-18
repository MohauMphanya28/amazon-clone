import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/ProductDetails";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Login from "./components/Login";
import Basket from "./components/Basket";
import PageNotFound from "./components/PageNotFound";
import ShoppingContext from "./context/shopping/shoppingContext";
import { useEffect, useContext } from "react";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const promise = loadStripe(
  "pk_test_51PRG0UImD5msr2LANzEKqFdKELjXtMO7AjbGNoQOox117XKMsmdJJMlg8rFoxFMzRfpE1qzuxSYFPdGWfTMnK8sE00f4yzdLV5"
); 

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
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
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements> 
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

// Checkout (isLogin) > Payment (isLogin) > PaidOrder (isLogin)
