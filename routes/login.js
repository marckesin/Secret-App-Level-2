const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login', { info: '' });
});

router.post('/', async (req, res) => {
  await User.findOne({ email: req.body.username }, (err, result) => {
    if (!err && result) {
      if (result.password === req.body.password) {
        res.render('secrets', { message: 'Login realizado com sucesso!' });
      } else {
        res.render('login', { info: 'Email ou senha inválidos!' });
      }
    } else {
      res.render('login', { info: 'Email ou senha inválidos!' });
    }
  });
});

module.exports = router;
