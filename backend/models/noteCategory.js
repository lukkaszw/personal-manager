const mongoose = require('mongoose');

const noteCategorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
});

const NoteCategory = mongoose.model('NoteCategory', noteCategorySchema);
module.exports = NoteCategory;