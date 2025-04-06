const Usermod = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.loginauth = async (req, res) => {
    const { email, password } = req.body;
    console.log("Request body:", req.body);
    try {
      const user = await Usermod.findOne({ email });
      console.log(user)
      if (!user) {
        return res.status(400).json({ message: 'Invalid Email' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      console.log('Password Match:', isMatch); 
      // Should log `true` if passwords match
      console.log("Hashed password from DB:", user.password);

      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid password' });
      }
  
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '5h',
      });
  
      res.status(201).json({ username: user.name,token:token });
      console.log(user.name);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };