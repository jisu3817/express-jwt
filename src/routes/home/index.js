const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.home);
router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);

module.exports = router;
