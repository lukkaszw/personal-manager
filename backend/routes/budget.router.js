const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budget.controller');

router.get('/', budgetController.getBudgets);

router.get('/:id', budgetController.getOneBudget);

router.post('/', budgetController.addBudget);

router.put('/:id', budgetController.editBudget);

router.delete('/:id', budgetController.deleteBudget);

module.exports = router;