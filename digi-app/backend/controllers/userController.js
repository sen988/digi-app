const User = require('../models/user');

const registerUser = async (req, res) => {
  const { username, name, email, password } = req.body;
  try {
    const newUser = await User.create({ username, name, email, password });
    res.status(201).json({ message: 'Registration successful', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

module.exports = {
  registerUser,
};