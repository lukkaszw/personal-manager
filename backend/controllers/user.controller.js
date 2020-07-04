const User = require('../models/user');

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

module.exports = {
  signUp,
};