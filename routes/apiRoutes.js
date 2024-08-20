// routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { loginLimiter } = require('../config/rateLimiter');

// Define routes
router.get('/', apiController.getHome);

// Apply the rate limiter to the login route
router.post('/login', loginLimiter, apiController.login);

module.exports = router;
