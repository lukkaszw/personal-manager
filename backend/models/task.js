const mongoose = require('mongoose');
const TASK_CODES = require('../utils/task.codes');
const { PRORITY, STATUS } = TASK_CODES;

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    maxlength: 70,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 1000,
    trim: true,
  },
  priority: {
    type: Number,
    enum: [PRORITY.LOW, PRORITY.NORMAL, PRORITY.HIGH, PRORITY.VERY_HIGH],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: Number,
    enum: [STATUS.IN_PROGRESS, STATUS.DONE, STATUS.FAILED],
    default: STATUS.IN_PROGRESS,
  }
}, {
  timestamps: true,
});


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;