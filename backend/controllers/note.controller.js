const Note = require('../models/note');
const NOTE_CODES = require('../utils/note.codes');
const { PRIORITY } = NOTE_CODES;


const getNotes = async (req, res) => {
  res.set('Cache-Control', 'no-cache');
  const userId = req.user._id;

  const match = {
    userId,
  };

  if(req.query.priority) {
    match.priority = PRIORITY[req.query.priority] || -1;
  }

  if(req.query.title) {
    const regexp = new RegExp(req.query.title, 'gi');

    match.title = { $regex: regexp};
  }

  const sort = {
    createdAt: -1,
  }

  if(req.query.sort) {
    delete sort.endDate;
    const sortParts = req.query.sort.split('_');
    const sortBy = sortParts[0];
    const order = sortParts[1] || 'asc';
    sort[sortBy] = order === 'desc' ? -1 : 1;
  }  

  try {
    const amount = await Note.countDocuments(match);

    const notes = await Note.find(match)
      .limit(Number(req.query.limit))
      .skip(Number(req.query.skip))
      .sort(sort);

    if(!notes) {
      res.json({amount: 0, notes: []});
      return;
    }
    res.json({ amount, notes });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const getOneNote = async (req, res) => {
  const userId = req.user.id;
  const noteId = req.params.id;
  try {
    const note = await Note.findOne({ _id: noteId, userId: userId });

    if(!note) {
      res.status(404).json({
        error: 'Note not found!',
      });
      return;
    }
    res.json(note);
  } catch (error) {
    res.status(500).json(error);
  } 
}

const addNote = async (req, res) => {
  const userId = req.user._id;
  const { title, description,  priority } = req.body;

  try {
    const note = new Note({ userId, title, description, priority });
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json(error);
  }
}

const editNote = async (req, res) => {
  const userId = req.user.id;
  const noteId = req.params.id;
  const allowedUpdates = ['title', 'description', 'priority'];
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
    const note = await Note.findOne({ _id: noteId, userId: userId });

    if(!note) {
      res.status(404).json({
        error: 'Note not found!',
      });
      return;
    }

    triedChanges.forEach(key => {
      note[key] = data[key];
    });

    await note.save();

    res.json(note);
  } catch (error) {
    res.status(500).json(error);
  } 
}

const deleteNote = async (req, res) => {
  const userId = req.user.id;
  const noteId = req.params.id;

  try {
    const note = await Note.findOne({ _id: noteId, userId: userId });

    if(!note) {
      res.status(404).json({
        error: 'Note not found!',
      });
      return;
    }

    await note.remove();

    res.json(note);
  } catch (error) {
    res.status(500).json(error);
  } 
}

module.exports = {
  getNotes,
  getOneNote,
  addNote,
  editNote,
  deleteNote,
}

