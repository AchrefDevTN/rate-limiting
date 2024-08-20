// controllers/apiController.js

// A simple controller for the API
exports.getHome = (req, res) => {
    res.status(200).json({ message: 'Welcome to the API!' });
};

exports.login = (req, res) => {
    // Handle login logic here
    res.status(200).json({ message: 'Login successful!' });
};
