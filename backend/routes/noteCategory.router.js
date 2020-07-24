const express = require('express');
const router = express.Router();
const noteCategoryController = require('../controllers/noteCategory.controller');

router.get('', noteCategoryController.getNotesCategories);

router.get('/:id', noteCategoryController.getOneNoteCategory);

router.post('', noteCategoryController.addNoteCategory);

router.put('/:id', noteCategoryController.editNoteCategory);

router.delete('/:id', noteCategoryController.deleteNoteCategory);

router.delete('/with_notes/:id', noteCategoryController.deleteNoteCategoryWithNotes);

module.exports = router;