const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget',
    required: true,
  },
  description: {
    type: String,
    maxlength: 20,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BudgetCategory',
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BudgetSubcategory',
  },
  cost: {
    type: Number,
    validate: {
      validator: (value) => value > 0,
      message: () => 'Transaction cost has to be positive value!',
    },
    required: true,
  },
}, {
  timestamps: true,
});


const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;