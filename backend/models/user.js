const mongoose = require('mongoose');
const _v = require('validator');
const bcrypt = require('bcryptjs');

//must be 8 char long and contain at least one: capital letter, small letter, number, special char
const passwordRegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

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
      validator: (value) => passwordRegExp.test(value),
      message: () => 'Password must contain at least 8 characters and: one capital letter, one small letter, special character, one number!',
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
    required: true,
  },
  surname: {
    type: String,
    trim: true,
    required: true,
  },
  tasks: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }],
    default: [],
  },
  notes: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note'
    }],
    default: [],
  },
  adverts: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Advert'
    }],
    default: [],
  },
  budgets:  {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Budget'
    }],
    default: [],
  },
}, {
  timestamps: true,
});

userSchema.statics.sendRegistrationErrors = (error, res) => {
  
  if(error.message === 'Passwords do not match!') {
    return res.status(400).json({ 
      message: error.message, 
    });
  }

  if(error.errors) {
    const { login, password, name, surname } = error.errors;
    const errorTopic = login || password || name || surname;
    let message = 'Error occured!';
    if(errorTopic) {
      message += errorTopic.message;
    }

    return res.status(400).json({ message });
  }


  if(error.message.indexOf('duplicate key error') !== -1) {
    return res.status(400).json({ message: 'Provided email is in use!'});
  }

  res.status(500).json({ message: error.message });
}

userSchema.pre('save', async function (next) {
  const user = this;

  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});


const User = mongoose.model('User', userSchema);
module.exports = User;