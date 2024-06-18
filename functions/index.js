/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PRG0UImD5msr2LA9a7M8DCkbCLvPuCV1xzFJ6ljCOQeptOc4Jj1rGzMMQ9QoXSbFsiLIKRbhPKoP2qTtCm3H3vl00jvF3oDcp")
