const mongoose = require('mongoose');
const _v = require('validator');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    validate: {
      validator: (value) => _v.isEmail(value),
      message: props => 'Login should be an email!',
    },
    required: true,
    unique: [true, 'Provided email is in use!'],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    validate: {
      validator: (value) => value.length > 8,
      message: () => 'Password must be at least 8 characters long!',
    },
    required: true,
  },
  tokens: [{
      token: {
        type: String,
        required: true,
      },
  }],
  name: {
    type: String,
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;