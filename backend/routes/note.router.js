const express = require('express');
const router = express.Router();
const noteCotroller = require('../controllers/note.controller');

router.get('', noteCotroller.getNotes);

router.get('/:id', noteCotroller.getOneNote);

router.post('', noteCotroller.addNote);

router.put('/:id', noteCotroller.editNote);

router.delete('/:id', noteCotroller.deleteNote);

module.exports = router;