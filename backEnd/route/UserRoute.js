const express = require('express');
const { createUser, userLogin, userLogout, forgorPassword } = require('../middlewares/UserController.js');
const router = express.Router();

router.route('/registration').post(createUser);
router.route('/login').post(userLogin);
router.route('/logout').get(userLogout);
router.route('/password/forgot').post(forgorPassword)

module.exports = router;
