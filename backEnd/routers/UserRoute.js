const express = require('express');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../Authentication/Authentication.js');
const {
    createOTP,
    createUser,
    userLogin,
    userLogout,
    forgetPassword,
    resetPassword,
    userDetails,
    updatePassword,
    getAllUser,
    getSingleUser
} = require('../controllers/UserController.js');
const router = express.Router();

router.route('/OTP')
    .post(createOTP);
router.route('/registration')
    .post(createUser);
router.route('/login')
    .post(userLogin);
router.route('/logout')
    .get(verifyTokenAndAuthorization, userLogout);
router.route('/me')
    .get(verifyTokenAndAuthorization, userDetails);
router.route('/me/password/update/:id')
    .put(verifyTokenAndAuthorization, updatePassword);
router.route('/password/forgot')
    .post(forgetPassword);
router.route('/password/reset/:token')
    .put(resetPassword);
router.route('/admin/users')
    .get(verifyTokenAndAuthorization, verifyTokenAndAdmin, getAllUser);
router.route('/admin/user/:id')
    .get(verifyTokenAndAuthorization, verifyTokenAndAdmin, getSingleUser);

module.exports = router;
