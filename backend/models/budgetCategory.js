const mongoose = require('mongoose');

const budgetCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  subCategories: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BudgetSubcategory',
    }],
    default: [],
  },
});

const BudgetCategory = mongoose.model('BudgetCategory', budgetCategorySchema);
module.exports = BudgetCategory;