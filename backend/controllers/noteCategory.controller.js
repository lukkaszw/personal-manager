const NoteCategory = require('../models/noteCategory');
const Note = require('../models/note');

const getNotesCategories = async (req, res) => {
  const userId = req.user._id;
  try {
    const noteCategories = await NoteCategory.find({ userId });

    if(!noteCategories || noteCategories.length === 0) {
      res.json([]);
      return;
    }

    res.json(noteCategories);

  } catch (error) {
    res.status(500).json(error);
  }
}

const getOneNoteCategory = async (req, res) => {
  const noteCatId = req.params.id;
  const userId = req.user._id;

  try {
    const noteCategory = await NoteCategory.findOne({ userId, _id: noteCatId });

    if(!noteCategory) {
      res.status(404).json({
        error: 'Note category not found!',
      });
      return;
    }

    res.json(noteCategory);

  } catch (error) {
    res.status(500).json(error);
  }
}

const addNoteCategory = async (req, res) => {
  const userId = req.user._id;
  
  const name = req.body.name;

  if(!name) {
    res.status(400).json({
      error: 'Bad request!'
    });
    return;
  }

  try {
    const noteCategory = new NoteCategory({ userId, name });

    await noteCategory.save();

    res.status(201).json(noteCategory);
  } catch (error) {
    res.status(500).json(error);
  }
}

const editNoteCategory = async (req, res) => {
  const userId = req.user.id;
  const noteCategoryId = req.params.id;
  const allowedUpdate = 'name';
  const data = req.body;
  const triedChanges = Object.keys(data);
  const isMatch = (triedChanges.length === 1) && (triedChanges[0] === allowedUpdate);

  if(!isMatch) {
    res.status(400).json({
      error: 'Bad request!',
    });

    return;
  }

  try {
    const noteCategory = await NoteCategory.findOne({ _id: noteCategoryId, userId });

    if(!noteCategory) {
      res.status(404).json({
        error: 'Task not found!',
      });
      return;
    }

    noteCategory.name = data.name;

    await noteCategory.save();

    res.json(noteCategory);
  } catch (error) {
    res.status(500).json(error);
  } 
}

const deleteNoteCategory = async (req, res) => {
  const noteCategoryId = req.params.id;
  const userId = req.user._id;

  try {
    const noteCategory = await NoteCategory.findOne({ userId, _id: noteCategoryId });
    if(!noteCategory) {
      res.status(404).json({
        error: 'Note category not found!',
      });
      return;
    } 

    await noteCategory.remove();

    res.json(noteCategory);

  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteNoteCategoryWithNotes = async (req, res) => {
  const noteCategoryId = req.params.id;
  const userId = req.user._id;

  try {
    const noteCategory = await NoteCategory.findOne({ userId, _id: noteCategoryId });
    if(!noteCategory) {
      res.status(404).json({
        error: 'Note category not found!',
      });
      return;
    } 

    const notes = await Note.find({ userId, category: noteCategory._id });

    notes.forEach(async (note) => {
      await note.remove();
    });

    await noteCategory.remove();

    res.json(noteCategory);

  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getNotesCategories,
  getOneNoteCategory,
  addNoteCategory,
  editNoteCategory,
  deleteNoteCategory,
  deleteNoteCategoryWithNotes,
};