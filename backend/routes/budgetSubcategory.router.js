const express = require('express');
const router = express.Router();
const budgetSubcategoryController = require('../controllers/budgetSubcategory.controller');

router.get('/', budgetSubcategoryController.getBudgetSubcategories);

module.exports = router;