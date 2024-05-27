import React from "react";
import "./Product.css";

const Product = ({ id, image, title, rating, price }) => {
  return (
    <div className="product">
      <img src={image} alt="Atomic Habits Book" />
      <div className="product-info">
        <p>{title}</p>
        <div className="product-rating">
          <p>{rating}</p>
        </div>
        <p className="product-price">{price}</p>
      </div>
      <button className="product-button">Add to basket</button>
    </div>
  );
};

export default Product;
