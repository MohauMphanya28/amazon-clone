import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/ProductDetails";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Basket from "./components/Basket";
import PageNotFound from "./components/PageNotFound";
import ShoppingContext from "./context/shopping/shoppingContext";
import { useEffect, useContext } from "react";
import { auth } from "./Firebase";
import CheckoutProduct from "./components/CheckoutProduct";
import Checkout from "./components/Checkout";

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);

      if (authUser) {
        setUser({authUser})
      } else {
        setUser(null)
      }
    })
  }, [])
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
