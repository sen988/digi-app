const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', (req, res, next) => {
    //debug
    console.log('Register endpoint hit');
    next();
  }, registerUser);

module.exports = router;