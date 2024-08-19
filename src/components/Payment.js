import React, { useContext, useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom/cjs/react-router-dom";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import { response } from "express";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal } = shoppingContext;

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecreet] = useState(true);

  useEffect (() => {
    //Generate the special Stripe secret which will allow us to charge a customer
    const getClientSecret = async () => {
      cost response = await axios ({
        method: "POST",
        url: `/payment/create?total=${getBasketTotal(basket)}'
      })
    }
  })

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 Dummy Address</p>
            <p>Dummy City</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
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
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">{/*Stripe Code */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
