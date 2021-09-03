const express = require("express");
const router = express.Router();
const auth = require("./middleware/auth");
const { check, validationResult } = require("express-validator");

// @route   GET flights
// @desc    Get flights from search
// @access  Private
router.get("/");
