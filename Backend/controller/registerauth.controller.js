const user=require('../models/User');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');



exports.registerauth = async (req, res) => {
    const { name, email, password } = req.body;
    
    console.log("Request body:", req.body);
    try {
      // Check if the user already exists
      const userExists = await user.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
      console.log("Creating new user...");
      // Create a new user with plain password (hashed in the model)
      const newUser = new user({ name, email, password });
     
      
      const savedUser = await newUser.save(); // Hashing is handled by the pre-save hook in the model
      console.log("Saved user:", savedUser);
      // Generate a JSON Web Token
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
      });
      

      // Respond with the token
      res.status(201).json({ username: newUser.name,token:token });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  



