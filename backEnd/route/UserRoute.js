const express = require('express');
const { authentication, authorizeRole } = require('../Authentication/Authentication.js');
const {
    createUser,
    userLogin,
    userLogout,
    forgorPassword,
    resetPassword,
    userDetails,
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser
} = require('../middlewares/UserController.js');
const router = express.Router();

router.route('/registration').post(createUser);
router.route('/login').post(userLogin);
router.route('/logout').get(userLogout);
router.route('/password/forgot').post(forgorPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/me').get(authentication, userDetails);
router.route('/me/password/update').put(authentication, updatePassword);
router.route('/me/profile/update').put(authentication, updateProfile);
router.route('/admin/users').get(authentication, authorizeRole("admin"), getAllUser);
router.route('/admin/user/:id').get(authentication, authorizeRole("admin"), getSingleUser);

module.exports = router;
