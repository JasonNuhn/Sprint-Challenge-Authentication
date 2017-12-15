const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  newUser.save((err, savedUser) => {
    if (err) {
      res.status(422);
      res.json(err);
      return;
    }
    res.json(savedUser);
  });
};

module.exports = {
  createUser,
};
