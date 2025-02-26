const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {

      //console.log("REQUEST BODY:", req.body); //debug statement

      const { username, name, email, password } = req.body;
  
      if ( !username || !name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields.' });
      }
  
      const newUser = await User.create({ username, name, email, password });
  
      return res.status(201).json({ message: 'User created successfully!', user: newUser });
    } catch (err) {
      console.error('Error creating user:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  };