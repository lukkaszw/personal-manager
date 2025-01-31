const Transaction = require('../models/transaction');
const Budget = require('../models/budget');

const getTransactions = async (req, res) => {
  const userId = req.user._id;
  const budgetId = req.params.budgetId;
  try {
    const transations = await Transaction
      .find({ userId, budgetId })
      .populate('category')
      .populate('subcategory');

    if(!transations || transations.length === 0) {
      res.json([]);
      return;
    }

    res.json(transations);
  } catch (error) {
    res.status(500).json(error);
  }
}

const getOneTransaction = async (req, res) => {
  const userId = req.user._id;
  const _id = req.params.id;

  try {
    const transaction = await Transaction
      .findOne({ _id, userId })
      .populate([
        {
          path: 'category',
        },
        {
          path: 'subcategory',
        }
      ]);
    
    if(!transaction) {
      res.status(404).json({
        error: 'Transaction not found!',
      });
      return;
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json(error);
  }
}

const addTransaction = async (req, res) => {
  const userId = req.user._id;
  const { budgetId, description, cost, category, subcategory, date } = req.body;

  try {
    const matchedBudget = await Budget.findOne({ userId, _id: budgetId });
    if(!matchedBudget) {
      res.status(400).json({
        error: 'Bad request!',
      });
      return;
    }

    const transaction = new Transaction({ userId, budgetId, description, cost, category, subcategory, date });
    await transaction.save();
    res.json(transaction);
  } catch (error) {
    res.status(500).json(error);
  }
}

const editTransaction = async (req, res) => {
  const userId = req.user.id;
  const transactionId = req.params.id;
  const allowedUpdates = ['description', 'date', 'cost', 'category', 'subcategory'];
  const data = req.body;
  const triedChanges = Object.keys(data).filter(key => key !== 'budgetId');
  const isMatch = triedChanges.every(change => allowedUpdates.includes(change));

  
  if(!isMatch) {
    res.status(400).json({
      error: 'Bad request!',
    });
    return;
  }

  try {
    const transaction = await Transaction.findOne({ _id: transactionId, userId: userId });

    if(!transaction) {
      res.status(404).json({
        error: 'Note not found!',
      });
      return;
    }

    triedChanges.forEach(key => {
      transaction[key] = data[key];
    });

    await transaction.save();

    res.json(transaction);
  } catch (error) {
    res.status(500).json(error);
  } 
}

const deleteTransactions = async (req, res) => {
  const userId = req.user._id;
  const { transactions } = req.body;
  
  try {

    transactions.forEach(async (transactionId) => {
      const document = await Transaction.findOne({ userId, _id: transactionId });
      await document.remove();
    });

    res.json({
      message: 'Transactions deleted!',
    });

  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getTransactions,
  getOneTransaction,
  addTransaction,
  editTransaction,
  deleteTransactions,
}