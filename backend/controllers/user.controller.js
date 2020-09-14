const User = require('../models/user');
const bcrypt = require('bcryptjs');
const ERRORS = require('../errors/user.errors');

const signUp = async (req, res) => {
  const { login, password, confirmPassword } = req.body;

  try {
    if(password !== confirmPassword) {
      throw new Error('Passwords do not match!');
    }
    const user = new User({ login, password });

    await user.save();
    res.status(201).json({
      message: 'Your account has been created! Please sign in.',
    });
  } catch (error) {
    User.sendRegistrationErrors(error, res);
  }
}

const signIn = async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await User.findByCredentials(login, password);

    const token = await user.generateAuthToken();
    
    res.json({ token, user });
  } catch (error) {
    if(error.message === 'Incorrect login or password!') {
      res.json({
        isError: true,
        message: error.message,
        errorCode: ERRORS.BAD_REQUEST,
      });
      return;
    }
    res.status(500).json(error);
  }
}

const getUserData = (req, res) => {
  res.json(req.user);
}

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens
      .filter(token => token.token.toString() !== req.token);
    await req.user.save();
    res.json({
      message: 'Successfull logout!',
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteAccount = async (req, res) => {
  try {
    await req.user.remove();
    res.json(req.user);
  } catch (error) {
    res.status(500).json(error);
  }
}

const updateData = async (req, res) => {
  const allowedUpdates = ['name', 'surname'];
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

    triedChanges.forEach(key => {
      req.user[key] = data[key];
    });

    await req.user.save();

    res.json(req.user);
  } catch (error) {
    res.status(500).json(error);
  } 
}

const updatePassword = async (req, res) => {
  
  const { password, currentPassword, confirmPassword } = req.body;

  const isMatch = await bcrypt.compare(currentPassword, req.user.password);

  if(!isMatch) {
    res.status(401).send('Incorect old password!');
    return;
  }

  if(password !== confirmPassword) {
    res.status(400).json({
      error: 'Bad request!',
    });
    return;
  }

  try {

    req.user.password = password;

    await req.user.save();

    res.status(200).json({
      success: 'OK',
    });

  } catch (error) {
    res.status(500).send('Dupa!');
  }
}

module.exports = {
  signUp,
  signIn,
  logout,
  getUserData,
  deleteAccount,
  updateData,
  updatePassword,
};