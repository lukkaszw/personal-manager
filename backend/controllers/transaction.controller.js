const Transaction = require('../models/transaction');

const getTransactions = async (req, res) => {
  const userId = req.user._id;
  const budgetId = req.params.budgetId;
  try {
    const transations = await Transaction.find({ userId, budgetId });

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
    const transaction = new Transaction({ userId, budgetId, description, cost, category, subcategory, date });
    await transaction.save();
    res.json(transaction);
  } catch (error) {
    res.status(500).json(error);
  }
}

const editTransaction = async (req, res) => {

}

const deleteTransaction = async (req, res) => {
  const userId = req.user._id;
  const _id = req.params.id;
  
  try {
    const transaction = await Transaction.findOne({ _id, userId });
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

module.exports = {
  getTransactions,
  getOneTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
}