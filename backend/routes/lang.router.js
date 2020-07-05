const express = require('express');
const router = express.Router();
const langController = require('../controllers/lang.controller');

router.post('/', langController.getTerms);

router.post('/add', langController.addTerms);

module.exports = router;