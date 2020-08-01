const Budget = require('../models/budget');
const BUDGET_CODES = require('../utils/budget.codes');
const { TYPE } = BUDGET_CODES;

const getBudgets = async (req, res) => {
  const userId = req.user._id;

  const match = {
    userId,
  };

  const sort = {
    createdAt: -1,
  };

  
  if(req.query.type) {
    match.type = TYPE[req.query.type] || -1;

    if(Number(req.query.type) === TYPE.monthly) {
      delete sort.createdAt;
      sort.month = -1;
    }
  }
  
  try {
    const budgets = await Budget
      .find(match)
      .limit(Number(req.query.limit))
      .skip(Number(req.query.skip))
      .sort(sort);

    if(!budgets || budgets.length === 0) {
      res.json([]);
      return;
    }

    res.json(budgets);
  } catch (error) {
    res.status(500).json(error);
  }
}

const getOneBudget = async (req, res) => {
  const userId = req.user._id;
  const _id = req.params.id;
  try {
    const budget = await Budget
      .findOne({ _id, userId })
      .populate({
        path: 'budgetedCategories.category',
        model: 'BudgetCategory',
        populate: {
          path: 'subCategories',
          model: 'BudgetSubcategory',
        },
      });

    if(!budget) {
      res.status(404).json({
        error: 'Budget not found!',
      });
      return;
    }

    res.json(budget);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}


const addBudget = async (req, res) => {
  const userId = req.user._id;
  const { name, type, budgetedCategories, totalAmount, month } = req.body;
  
  try {
    const budget = new Budget({ userId, name, type, budgetedCategories, totalAmount, month });
    await budget.save();
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getBudgets,
  addBudget,
  getOneBudget,
};