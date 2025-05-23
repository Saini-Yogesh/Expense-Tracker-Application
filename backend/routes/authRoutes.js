const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User'); // Adjust path as needed

router.post('/register', register);
router.post('/login', login);

// ✅ Get username using userId from token
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user).select('username');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ username: user.username });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
