import React from "react";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="product-row">
        <Product
          id="1"
          title="Atomic Habits"
          image="https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY522_.jpg"
          rating={5}
          price={235}
        />
        <Product
          id="1"
          title="Psychology of Money"
          image="https://m.media-amazon.com/images/I/71aG0m9XRcL._AC._SR360,460.jpg"
          rating={4}
          price={199}
        />
        <Product
          id="1"
          title="Thinking, Fast and Slow"
          image="https://m.media-amazon.com/images/I/71f6DceqZAL._AC_UL480_QL65_.jpg"
          rating={4}
          price={278}
        />
        <Product
          id="1"
          title="The Diary of a CEO: The 33 Laws of Business and Life"
          image="https://m.media-amazon.com/images/I/61PIpidSThL._AC._SR360,460.jpg"
          rating={4}
          price={250}
        />
      </div>
      <div className="product-row">
        <Product
          id="1"
          title="The Personal MBA: A World-Class Business Education in a Single Volume"
          image="https://images-eu.ssl-images-amazon.com/images/I/71IWc+F7yeL._AC_UL330_SR330,330_.jpg"
          rating={4}
          price={235}
        />
        <Product
          id="1"
          title="Never Split the Difference: Negotiating as if Your Life Depended on It "
          image="https://m.media-amazon.com/images/I/51HmMGfvpTL._AC._SR360,460.jpg"
          rating={4}
          price={199}
        />
        <Product
          id="1"
          title="Poverty Proof: 50 ways to train your brain for wealth"
          image="https://m.media-amazon.com/images/I/51WMLekZgML._SY522_.jpg"
          rating={4}
          price={105}
        />
        <Product
          id="1"
          title="Start With Why: The Inspiring Million-Copy Bestseller That Will Help You Find Your Purpose"
          image="https://m.media-amazon.com/images/I/71jW2qrp+SL._SY522_.jpg"
          rating={5}
          price={220}
        />
      </div>
      <div className="product-row">
        <Product
          id="1"
          title="12 Rules for Life: An Antidote to Chaos"
          image="https://m.media-amazon.com/images/I/71OVB8HknWL._SY522_.jpg"
          rating={5}
          price={160}
        />
      </div>
    </>
  );
};

export default Products;
