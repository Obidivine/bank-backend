const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Replace with your user schema
const bcrypt = require('bcryptjs'); // Add bcryptjs



// Create a user
router.post('/register', async (req, res) => {
    const { personalInfo, residentialAddress, loginInfo, identityInfo } = req.body;

    try {
        const newUser = new User({
            personalInfo,
            residentialAddress,
            loginInfo,
            identityInfo,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});


// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});


module.exports = router;

module.exports = router;
