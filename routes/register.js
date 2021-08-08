const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/', (req, res, next) => {
    res.render('register', { info: "" });
});

router.post('/', async (req, res) => {
    const user = new User({
        email: req.body.username,
        password: req.body.password
    });

    await User.countDocuments({ email: req.body.username }, (err, count) => {
        if (!err && count === 0) {
            user.validate({}, (err) => {
                if (!err) {
                    user.save((err) => {
                        if (!err) {
                            res.render('secrets', { message: "Password encriptado!" });
                        }
                    });
                }
            });
        } else {
            res.render('register', { info: "Usuário já cadastrado!" });
        }
    });
});

module.exports = router;