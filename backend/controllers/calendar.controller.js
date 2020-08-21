const Task = require('../models/task');
const Budget = require('../models/budget');
const Transaction = require('../models/transaction');
const moment = require('moment');

const getMonth = async (req, res) => {
  const userId = req.user._id;

  const { month, year } = req.query;

  if(!month || !year) {
    res.status(400).json({
      error: 'Bad request!',
    });

    return;
  }

  const monthNr = month * 1 > 9 ? month : `0${month}`;

  const monthString = moment(`${year}-${monthNr}-15`).format('MMMM');

  try {
    const tasks = await Task.find({ 
      userId, 
      endDate: { $gte: `${year}-${monthNr}-01GMT00:00:00.000Z`, $lte: `${year}-${monthNr}-31GMT23:59:59.000Z` }
    });

    const parsedTasks = tasks.map(task => ({ ...task, day: moment(task.endDate).date()}));

    const daysInMonth = moment(`${year}-${monthNr}`).daysInMonth();

    const days = [];

    for (let i = 1;i <= daysInMonth; i++) {

      const tasksInDay = parsedTasks.filter(task => task.day === i);

      const day = {
        day: i,
        weekDay: moment(`${year}-${monthNr}-${i > 9 ? i : `0${i}`}`).weekday(),
        tasks: tasksInDay,
      };

      days.push(day);
    }
    
    const matchBudgets = await Budget.find({ userId, year, month: monthString});
    const parsedBudgets = matchBudgets.map((budget) => ({ 
      _id: budget._id, 
      name: budget.name, 
      totalAmount: budget.totalAmount,
      month: budget.month,
      year: budget.year,
    }));

    if(parsedBudgets.length > 0) {

      for (let i = 0; i < parsedBudgets.length; i++) {

        const transactions = await Transaction.find({ userId, budgetId: parsedBudgets[i]._id });

        const expenses = transactions.reduce((prevAmount, nextTrans) => {
          return prevAmount + nextTrans.cost;
        }, 0);

        parsedBudgets[i].expenses = expenses;
      }
    }

    res.json({ month: monthString, year, days, budgets: parsedBudgets });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getMonth,
};
