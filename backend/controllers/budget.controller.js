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
      sort.date = -1;
    }
  }
  
  try {
    const amount = await Budget.countDocuments(match);

    const budgets = await Budget
      .find(match)
      .limit(Number(req.query.limit))
      .skip(Number(req.query.skip))
      .sort(sort);

    if(!budgets || budgets.length === 0) {
      res.json({ budgets: [], amount: 0 });
      return;
    }

    res.json({ amount, budgets });
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
  const { name, type, budgetedCategories, totalAmount, month, year, date } = req.body;
  
  try {
    const budget = new Budget({ userId, name, type, budgetedCategories, totalAmount, month, year, date });
    await budget.save();
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json(error);
  }
};

const editBudget = async (req, res) => {
    const userId = req.user._id;
    const budgetId = req.params.id;
    const data = req.body;

    const allowedUpdates = ['name', 'type', 'budgetedCategories', 'totalAmount', 'month', 'year', 'date' ];
    const triedChanges = Object.keys(data);
    const isMatch = triedChanges.every(change => allowedUpdates.includes(change));

    if(!isMatch) {
      res.status(400).json({
        error: 'Bad request!',
      });
  
      return;
    }

    try {
      const budget = await Budget.findOne({ _id: budgetId, userId: userId });
  
      if(!budget) {
        res.status(404).json({
          error: 'Budget not found!',
        });
        return;
      }
  
      triedChanges.forEach(key => {
        budget[key] = data[key];
      });
  
      await budget.save();
  
      res.json(budget);
    } catch (error) {
      res.status(500).json(error);
    } 
}

const deleteBudget = async (req, res) => {
  const userId = req.user._id;
  const budgetId = req.params.id;

  try {
    const budget = await Budget.findOne({ _id: budgetId, userId: userId });
    
    if(!budget) {
      res.status(404).json({
        error: 'Budget not found!',
      });
      return;
    }

    await budget.remove();

    res.json(budget);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getBudgets,
  addBudget,
  getOneBudget,
  editBudget,
  deleteBudget,
};