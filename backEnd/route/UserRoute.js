const express = require('express');
const { createUser, userLogin, userLogout, forgorPassword, resetPassword, userDtails } = require('../middlewares/UserController.js');
const router = express.Router();

router.route('/registration').post(createUser);
router.route('/login').post(userLogin);
router.route('/logout').get(userLogout);
router.route('/password/forgot').post(forgorPassword)
router.route('/password/reset/:token').put(resetPassword)
router.route('/me').get(userDtails)


module.exports = router;
