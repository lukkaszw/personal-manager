const express = require('express');
const path = require('path');
const cors = require('cors');
require('./database');
const auth = require('./middlewares/auth');

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`);
});

const userRouter = require('./routes/user.router');
const langRouter = require('./routes/lang.router');
const tasksRouter = require('./routes/task.router');
const notesRouter = require('./routes/note.router');
const notesCategoriesRouter = require('./routes/noteCategory.router');
const budgetCategoriesRouter = require('./routes/budgetCategory.router');
const budgetSubcategoriesRouter = require('./routes/budgetSubcategory.router');
const budgetsRouter = require('./routes/budget.router');
const transactionsRouter = require('./routes/transaction.router');

app.use('/user', userRouter);
app.use('/lang', langRouter);
app.use('/tasks', auth, tasksRouter);
app.use('/notes_cat', auth, notesCategoriesRouter);
app.use('/notes', auth, notesRouter);
app.use('/budget_categories', budgetCategoriesRouter);
app.use('/budget_subcategories', budgetSubcategoriesRouter);
app.use('/budgets', auth, budgetsRouter);
app.use('/transactions', auth, transactionsRouter);


app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));                               
});