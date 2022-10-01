const express = require('express');
const { createUser, userLogin } = require('../middlewares/UserController.js');
const router = express.Router();

router.route('/registration').post(createUser);
router.route('/login').post(userLogin);

module.exports = router;
