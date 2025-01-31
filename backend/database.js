const mongoose = require('mongoose');

const url = process.env.NODE_ENV === 'production' ?
`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-r6yso.mongodb.net/personal_manager?retryWrites=true&w=majority`
:
'mongodb://127.0.0.1:27020/personal_manager';

mongoose.connect(url, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database!');
});