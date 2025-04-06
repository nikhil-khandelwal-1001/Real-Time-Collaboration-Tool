const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

//Controller
const { loginauth } =require('../controller/loginauth.controller')
const { registerauth } =require('../controller/registerauth.controller')


router.post('/register', registerauth );

// POST: Sign In
router.post('/login', loginauth );

module.exports = router;