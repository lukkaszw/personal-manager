const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

router.post('/', userController.signUp);

router.post('/login', userController.signIn);

router.get('/me', auth, userController.getUserData);

router.post('/logout', auth, userController.logout);

module.exports = router;