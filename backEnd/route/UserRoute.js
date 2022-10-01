const express = require('express');
const { createUser, userLogin, userLogout } = require('../middlewares/UserController.js');
const router = express.Router();

router.route('/registration').post(createUser);
router.route('/login').post(userLogin);
router.route('/logout').post(userLogout);

module.exports = router;
