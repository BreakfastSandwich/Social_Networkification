const { User } = require('../models/User');

module.exports = {

    // Get all users
    async getUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users)
      } catch (err) {
        res.status(500).json({message: error.message})
      }
    },

    // Get a user
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.username })
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Create a user
    async createUser(req, res) {
      try {
        const user = await User.create(
            {
            username: req.body.username,
            email:req.body.email
      });
        res.json(user);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },

    // Delete a user
    async deleteUser(req, res) {
      try {
        const user = await User.findOneAndDelete({ username: req.params.username });
  
        if (!user) {
          res.status(404).json({ message: 'No user with that ID' });
        }
  
        
      } catch (err) {
        res.status(500).json(err);
      }
    },
  };
  