const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PRG0UImD5msr2LA9a7M8DCkbCLvPuCV1xzFJ6ljCOQeptOc4Jj1rGzMMQ9QoXSbFsiLIKRbhPKoP2qTtCm3H3vl00jvF3oDcp"
);

// API

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get("/", (req, res) => res.status(200).send("Hello World! What's Good?"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(`Payment request received for amount: ${total}`);

  if (!total) {
    console.error('Total amount is required');
    res.status(400).send({ error: 'Total amount is required' });
    return;
  }

  if (isNaN(total) || parseInt(total) <= 0) {
    console.error('Total amount must be a positive number');
    res.status(400).send({ error: 'Total amount must be a positive number' });
    return;
  }

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total), // Ensure `total` is parsed as integer
      currency: "usd",
    });

    // Respond with the client secret for the payment
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    // Log and return any errors
    console.error('Error creating payment intent:', error);
    res.status(500).send({
      error: error.message,
    });
  }
});

// LISTEN COMMANDS
exports.api = functions.https.onRequest(app);
