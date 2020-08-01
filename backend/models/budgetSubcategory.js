const mongoose = require('mongoose');

const budgetSubcategorySchema = new mongoose.Schema({
  budgetCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BudgetCategory',
  },
  name: {
    type: String,
    required: true,
  },
});

const BudgetSubcategory = mongoose.model('BudgetSubcategory', budgetSubcategorySchema);
module.exports = BudgetSubcategory;