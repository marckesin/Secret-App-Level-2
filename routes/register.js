const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register', { info: '' });
});

router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.username,
    password: req.body.password,
  });

  await User.countDocuments({ email: req.body.username }, (err, count) => {
    if (!err && count === 0) {
      user.validate({}, (valErr) => {
        if (!valErr) {
          user.save((saveErr) => {
            if (!saveErr) {
              res.render('secrets', { message: 'Password encriptado!' });
            }
          });
        }
      });
    } else {
      res.render('register', { info: 'Usuário já cadastrado!' });
    }
  });
});

module.exports = router;
