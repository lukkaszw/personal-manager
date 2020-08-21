const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendar.controller');

router.get('', calendarController.getMonth)

module.exports = router;