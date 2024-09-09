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
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log(`Payment request received for amount: ${total}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // If creater correctly
  res.status(201).send({clientSecret: paymentIntent.client_secret })
});

// LISTEN COMMANDS
exports.api = functions.https.onRequest(app);
