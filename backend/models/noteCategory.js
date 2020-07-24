const mongoose = require('mongoose');
const Note = require('./note');

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

noteCategorySchema.pre('remove', async function (next) {
  const noteCategory = this;

  const notes = await Note.find({ userId: noteCategory.userId, category: noteCategory._id });
  if(!notes || notes.length === 0) {
    next();
    return;
  }

  notes.forEach(async note => {
    note.category = null;
    await note.save();
  });

  next();
});

const NoteCategory = mongoose.model('NoteCategory', noteCategorySchema);
module.exports = NoteCategory;