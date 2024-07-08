const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user to database...
    res.send('User registered');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Check user credentials...
    res.send('User logged in');
});

app.listen(port, () => {
    console.log(`User Auth Service running at http://localhost:${port}`);
});
