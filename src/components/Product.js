import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "../context/shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    addToBasket({ item: { id, image, title, rating, price } });
  };

  return (
    <div className="product">
      <img src={image} alt="Atomic Habits Book" />
      <div className="product-info">
        <p>{title}</p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product-price">{price}</p>
      </div>
      <button className="product-button " onClick={addToBasketHandler}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;
