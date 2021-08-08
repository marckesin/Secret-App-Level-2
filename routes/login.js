const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/', (req, res) => {
    res.render('login', { info: "" });
});

router.post('/', async (req, res) => {
    User.findOne({ email: req.body.username }, (err, result) => {
        if (!err && result) {
            if (result.password === req.body.password) {
                res.render('secrets', { message: "Login realizado com sucesso!" });
            } else {
                res.render('login', { info: "Email ou senha inválidos!" });
            }
        } else {
            res.render('login', { info: "Email ou senha inválidos!" });
        }
    });
});

module.exports = router;
