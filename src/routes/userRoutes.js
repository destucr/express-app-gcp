const express = require('express');
const { getUsers, getUserById, createUser } = require('../controllers/userController');

const router = express.Router();

// Route definitions
router.get('/', getUsers); // Get all users
router.get('/:id', getUserById); // Get a user by ID
router.post('/', createUser); // Create a new user

module.exports = router;
