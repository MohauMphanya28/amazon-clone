import React, { useContext } from "react";
import "./Checkout.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src="" alt="" />
        <div className="">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your Shopping Cart</h2>
          
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
