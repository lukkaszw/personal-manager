const mongoose = require('mongoose');
const TASK_CODES = require('../utils/task.codes');
const { PRIORITY, STATUS } = TASK_CODES;

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
    maxlength: 3000,
    trim: true,
  },
  priority: {
    type: Number,
    enum: [PRIORITY.low, PRIORITY.normal, PRIORITY.high, PRIORITY.very_high],
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: Number,
    enum: [STATUS.in_progress, STATUS.done, STATUS.failed],
    default: STATUS.in_progress,
  }
}, {
  timestamps: true,
});


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;