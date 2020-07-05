const User = require('../models/user');
const ERRORS = require('../errors/user.errors');

const signUp = async (req, res) => {
  const { login, password, confirmPassword, name, surname } = req.body;

  try {
    if(password !== confirmPassword) {
      throw new Error('Passwords do not match!');
    }
    const user = new User({ login, password, name, surname });

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
    console.log(user);
    const token = await user.generateAuthToken();
    console.log(token);
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

module.exports = {
  signUp,
  signIn,
};