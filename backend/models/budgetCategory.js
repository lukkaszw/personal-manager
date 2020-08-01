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

// Bills: 5f2546e847b2f016ecfefc48,
// Shopping 5f2546e847b2f016ecfefc49
// Education 5f2546e847b2f016ecfefc4a
// Children 5f2546e847b2f016ecfefc4b
// Entertainment 5f2546e847b2f016ecfefc4c