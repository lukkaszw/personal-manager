const Task = require("../models/task")
const TASK_CODES = require('../utils/task.codes');
const { PRIORITY, STATUS } = TASK_CODES;

const getTasks = async (req, res) => {
  const userId = req.user._id;

  const match = {
    userId,
  };

  
  if(req.query.status) {
    match.status = STATUS[req.query.status] || -1;
  }

  if(req.query.priority) {
    match.priority = PRIORITY[req.query.priority] || -1;
  }
  
  if(req.query.title) {
    const regexp = new RegExp(req.query.title, 'gi');

    match.title = { $regex: regexp};
  }

  if(req.query.date) {
    let dates = req.query.date.split('_').filter(dateString => dateString !== '');

    if(dates.length === 2) {
      const dateFrom = dates[0];
      const dateTo = dates[1];
      match.endDate = { $gte: dateFrom, $lte: dateTo };
    } else {
      const _index = req.query.date.indexOf('_');
      if(_index === 0) {
        match.endDate = { $lte: dates[0]};
      } else if ( _index === (req.query.date.length - 1)) {
        match.endDate = { $gte: dates[0]};
      }
    }
  }

  const sort = {
    endDate: 1,
  }

  if(req.query.sort) {
    delete sort.endDate;
    const sortParts = req.query.sort.split('_');
    const sortBy = sortParts[0];
    const order = sortParts[1] || 'asc';
    sort[sortBy] = order === 'desc' ? -1 : 1;
  }  

  try {
    const tasks = await Task.find(match)
      .limit(Number(req.query.limit))
      .skip(Number(req.query.skip))
      .sort(sort);

    if(!tasks) {
      res.json([]);
      return;
    }

    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const getOneTask = async (req, res) => {
  const userId = req.user.id;
  const taskId = req.params.id;
  try {
    const task = await Task.findOne({ _id: taskId, userId: userId });

    if(!task) {
      res.status(404).json({
        error: 'Task not found!',
      });
      return;
    }

    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  } 
}

const addTask = async (req, res) => {
  const userId = req.user._id;
  const { title, description,  priority, startDate, endDate } = req.body;

  try {
    const task = new Task({ userId, title, description, priority, startDate, endDate });
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
}

const editTask = async (req, res) => {
  const userId = req.user.id;
  const taskId = req.params.id;
  const allowedUpdates = ['title', 'description', 'status', 'priority', 'startDate', 'endDate'];
  const data = req.body;
  const triedChanges = Object.keys(data);
  const isMatch = triedChanges.every(change => allowedUpdates.includes(change));

  if(!isMatch) {
    res.status(400).json({
      error: 'Bad request!',
    });

    return;
  }

  try {
    const task = await Task.findOne({ _id: taskId, userId: userId });

    if(!task) {
      res.status(404).json({
        error: 'Task not found!',
      });
      return;
    }

    triedChanges.forEach(key => {
      task[key] = data[key];
    });

    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  } 
}

const deleteTask = async (req, res) => {
  const userId = req.user.id;
  const taskId = req.params.id;

  try {
    const task = await Task.findOne({ _id: taskId, userId: userId });

    if(!task) {
      res.status(404).json({
        error: 'Task not found!',
      });
      return;
    }

    await task.remove();

    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  } 
}



module.exports = {
  getTasks,
  getOneTask,
  addTask,
  editTask,
  deleteTask,
};