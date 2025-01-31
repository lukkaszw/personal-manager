const mongoose = require('mongoose');
const BUDGET_CODES = require('../utils/budget.codes');
const { TYPE } = BUDGET_CODES;
const Transaction = require('./transaction');

const budgetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 30,
    trim: true,
  },
  type: {
    type: Number,
    enum: [TYPE.monthly, TYPE.occasional],
    required: true,
  },
  budgetedCategories: {
    type: [
      {
        category: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'BudgetCategory',
          required: true,
        },
        amount: {
          type: Number,
          required: true,
          validate: {
            validator: (value) => value > 0,
            message: () => 'You can not use negative budget category value!',
          }
        },
      },
    ],
    default: [],
  },
  date: {
    type: Date,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
  totalAmount: {
    type: Number,
    validate: {
      validator: (value) => value > 0,
      message: () => 'You can not use negative budget value!',
    },
    required: true,
  },
}, {
  timestamps: true,
});

budgetSchema.pre('remove', async function (next) {
  const budget = this;

  await Transaction.deleteMany({ userId: budget.userId, budgetId: budget._id });
  
  next();
});


const Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget;