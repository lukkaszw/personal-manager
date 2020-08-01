const express = require('express');
const router = express.Router();
const budgetCategoryController = require('../controllers/budgetCategory.controller');

router.get('/', budgetCategoryController.getCategories);

module.exports = router;