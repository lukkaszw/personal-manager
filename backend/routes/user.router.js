const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.signUp);

router.post('/login', userController.signIn);

module.exports = router;