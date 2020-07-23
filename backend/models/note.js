const mongoose = require('mongoose');
const NOTE_CODES = require('../utils/note.codes');
const { PRIORITY } = NOTE_CODES;

const noteSchema = new mongoose.Schema({
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
    required: true,
    trim: true,
  },
  priority: {
    type: Number,
    enum: [PRIORITY.normal, PRIORITY.high],
    required: true,
  },
}, {
  timestamps: true,
});


const Note = mongoose.model('Note', noteSchema);
module.exports = Note;