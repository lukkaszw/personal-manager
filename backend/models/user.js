const mongoose = require('mongoose');
const _v = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ERRORS = require('../errors/user.errors');
const Task = require('../models/task');
const Note = require('../models/note');
const Transaction = require('../models/transaction');
const Budget = require('../models/budget');
const NoteCategory = require('../models/noteCategory');

//must be 8 char long and contain at least one: capital letter, small letter, number, special char
const passwordRegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    validate: {
      validator: (value) => !/[\s]+/.test(value),
      message: props => 'Login should be one word with minimum 3 and maximum 12 characters!',
    },
    required: true,
    minlength: 3,
    maxlength: 12,
    unique: [true, 'Provided login is in use!'],
    trim: true,
  },
  password: {
    type: String,
    validate: {
      validator: (value) => passwordRegExp.test(value),
      message: () => 'Password must contain at least 8 characters: one capital letter, one small letter, special character, one number!',
    },
    required: true,
  },
  tokens: [{
      token: {
        type: String,
        required: true,
      },
  }],
}, {
  timestamps: true,
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_KEY );

  user.tokens.push({token});
  await user.save();
  
  return token;
}

userSchema.statics.sendRegistrationErrors = (error, res) => {
  
  if(error.message === 'Passwords do not match!') {
    return res.json({
      isError: true, 
      message: error.message, 
      errorCode: ERRORS.BAD_REQUEST,
    });
  }

  if(error.errors) {
    const { login, password, name, surname } = error.errors;
    const errorTopic = login || password || name || surname;
    let message = 'Error occured!';
    if(errorTopic) {
      message = errorTopic.message;
    }

    return res.json({ isError: true, message, errorCode: ERRORS.BAD_REQUEST });
  }


  if(error.message.indexOf('duplicate key error') !== -1) {
    return res.json({ isError: true, message: 'Provided login is in use!', errorCode: ERRORS.USER_EXISTS });
  }

  res.status(500).json({ message: error.message, errorCode: ERRORS.SERVER_ERROR });
}

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.tasks;
  delete userObject.notes;
  delete userObject.adverts;
  delete userObject.budgets;

  return userObject;
}

userSchema.statics.findByCredentials = async (login, password) => {
  const user = await User.findOne({ login: { $eq: login }  });
  const errorMessage = 'Incorrect login or password!';
  if(!user) {
    throw new Error(errorMessage);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    throw new Error(errorMessage);
  }

  return user;
}

userSchema.pre('save', async function (next) {
  const user = this;

  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.pre('remove', async function (next) {
  const user = this;

  await Task.deleteMany({ userId: user._id });
  await Note.deleteMany({ userId: user._id });
  await NoteCategory.deleteMany({ userId: user._id });
  await Transaction.deleteMany({ userId: user._id });
  await Budget.deleteMany({ userId: user._id });

  next();
});


const User = mongoose.model('User', userSchema);
module.exports = User;