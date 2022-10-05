const express = require('express');
const { createUser, userLogin, userLogout, forgorPassword, resetPassword } = require('../middlewares/UserController.js');
const router = express.Router();

router.route('/registration').post(createUser);
router.route('/login').post(userLogin);
router.route('/logout').get(userLogout);
router.route('/password/forgot').post(forgorPassword)
router.route('/password/reset').post(resetPassword)

module.exports = router;
