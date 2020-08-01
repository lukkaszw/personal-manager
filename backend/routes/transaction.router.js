const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');

router.get('/for_budget/:budgetId', transactionController.getTransactions);

router.get('/:id', transactionController.getOneTransaction);

router.post('/', transactionController.addTransaction);

router.put('/:id', transactionController.editTransaction);

router.delete('/:id', transactionController.deleteTransaction)

module.exports = router;