// app.js

const express = require('express');
const helmet = require('helmet');
const { globalLimiter } = require('./config/rateLimiter');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Security middleware
app.use(helmet());

// Apply the global rate limiter to all API routes
app.use('/api/', globalLimiter);

// API Routes
app.use('/api/', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
