const express = require('express');
const path = require('path');
const cors = require('cors');
require('./database');

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

app.use('/user', userRouter);
app.use('/lang', langRouter);

app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));                               
});