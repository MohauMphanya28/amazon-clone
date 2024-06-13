import React, { useContext } from "react";
import "./CheckoutProduct.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import Product from "../components/Products"

const CheckoutProduct = ({ id, image, title, rating, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };
  
  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} alt=""/>
      <div className="checkout-product-info">
        <p className="checkout-product">{title}</p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="checkout-product-price">
          <small><strong>R</strong></small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
