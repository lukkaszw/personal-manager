const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tast.controller');

router.get('', taskController.getAllTasks);

router.get('/:id', taskController.getOneTask);

router.get('/done', taskController.getDoneTasks);

router.get('/failed', taskController.getFailedTasks);

router.get('/inprogress', taskController.getInProgressTasks);

router.post('', taskController.addTask);

router.put('/:id', taskController.editTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;