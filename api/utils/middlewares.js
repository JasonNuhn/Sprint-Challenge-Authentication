const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModels');
const { mysecret } = require('../../config');
const SaltRounds = 11;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

const sendUserError = (err, res) => {
  res.status(422);
  if (err && err.message) {
    res.json({ message: err.messag, stack: err.stack });
  } else {
    res.json({ error: err });
  }
};

const encryptUserPW = (req, res, next) => {
  const { password } = req.body;
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // Once the password is encrypted using bcrypt, you'll need to save the user the DB.
  // Once the user is set, take the savedUser and set the returned document from Mongo on req.user
  // call next to head back into the route handler for encryptUserPW
  if (!password) {
    sendUserError('Give me a password', res);
    return;
  }
  bcrypt
    .hash(password, SaltRounds)
    .then((pw) => {
      req.password = pw;
      next();
    })
    .catch((err) => {
      throw new Error(err);
    });

    const loggedIn = (req, res, next) => {
      const { username } = req.session;
      User.findOne({ username }), (err, user) => {
        req.user = user;
        next();
        }
      }
};

const compareUserPW = (req, res, next) => {
  const { username, password } = req.body;
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password comparing, bcrypt.compare()
  // You'll need to find the user in your DB
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  // If the passwords match set the username on `req` ==> req.username = user.username; and call next();
};

module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};
