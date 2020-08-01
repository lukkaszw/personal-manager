const BudgetSubcategory = require('../models/budgetSubcategory');

const getBudgetSubcategories = async (req, res) => {
  try {
    const budgetSubcategories = await BudgetSubcategory
      .find()
      .populate('budgetCategoryId');

    res.json(budgetSubcategories);

  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getBudgetSubcategories,
};