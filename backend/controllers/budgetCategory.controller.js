const BudgetCategory = require('../models/budgetCategory');

const getCategories = async (req, res) => {
  try {
    const budgetCategories = await BudgetCategory
      .find()
      .populate({
        path: 'subCategories'
      })
      .sort({ priority: 1 });

    res.json(budgetCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};



module.exports = {
  getCategories,
};