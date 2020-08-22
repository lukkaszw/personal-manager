const Task = require('../models/task');
const Budget = require('../models/budget');
const Transaction = require('../models/transaction');
const moment = require('moment');
const generateDays = require('../utils/generateDays');

const getMonth = async (req, res) => {
  const userId = req.user._id;

  const { month, year } = req.query;

  if(!month || !year) {
    res.status(400).json({
      error: 'Bad request!',
    });

    return;
  }

  const monthNr = month * 1; 
  const monthNrString = monthNr > 9 ? month : `0${month}`;

  const monthString = moment(`${year}-${monthNrString}-15`).format('MMMM');
  const daysInMonth = moment(`${year}-${monthNrString}`).daysInMonth();

  const firstDayOfMonth = moment(`${year}-${monthNrString}-01T00:00:00.000Z`);
  const lastDayOfMonth = moment(`${year}-${monthNrString}-${daysInMonth}T21:59:59.000Z`);

  const dayOfWeekAtFirst = firstDayOfMonth.weekday();
  const dayOfWeekAtLast = lastDayOfMonth.weekday();

  const daysFromPrevMonth = dayOfWeekAtFirst === 0 ? 6 : dayOfWeekAtFirst - 1;
  const daysFromNextMonth = dayOfWeekAtLast === 0 ? 0 : 7 - dayOfWeekAtLast;

  const beginDate = firstDayOfMonth.subtract(daysFromPrevMonth, 'days');
  const lastDate = lastDayOfMonth.add(daysFromNextMonth, 'days');

  try {
    const tasks = await Task.find({ 
      userId, 
      endDate: { $gte: beginDate.toISOString(), $lte: lastDate.toISOString() },
    });

    const parsedTasks = tasks.map(task => {
      const endDate = moment(task.endDate);
      return ({ 
        _id: task._id, 
        title: task.title,
        description: task.description,
        endDate: task.endDate,
        status: task.status,
        priority: task.priority,
        day: endDate.date(), 
        month: endDate.month() + 1});
    });

    const days = generateDays(
      parsedTasks,
      monthNr,
      year,
      daysInMonth,
      daysFromPrevMonth,
      daysFromNextMonth,
      beginDate,
      lastDate,
    );
    
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
