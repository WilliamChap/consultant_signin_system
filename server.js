const db = require('./database');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Dummy user data for authentication
const users = [
    { username: 'consultant', password: 'password' }
];

// Endpoint to handle login
app.post('/login', (req, res) => {
    console.log('Login request received:', req.body);
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'An error occurred' });
        } else if (row) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});


// Endpoint to handle sign-in and sign-out
app.post('/timestamp', (req, res) => {
    console.log('Timestamp request received:', req.body);
    const { username, action } = req.body;
    const timestamp = new Date().toISOString();

    console.log(`${username} performed ${action} at ${timestamp}`);
    res.status(200).json({ message: `${action} recorded at ${timestamp}` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
