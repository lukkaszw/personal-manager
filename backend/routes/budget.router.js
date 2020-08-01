const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budget.controller');

router.get('/', budgetController.getBudgets);

router.get('/:id', budgetController.getOneBudget);

router.post('/', budgetController.addBudget);

module.exports = router;