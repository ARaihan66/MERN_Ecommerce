const express = require('express');
const router = express.Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../Authentication/Authentication.js');
const { createOrder, getSingleOrder, getAllOrder, getAdminAllOrder, deleteOrder } = require('../controllers/OrderController.js');

router.route('/create/order')
    .post(verifyTokenAndAuthorization, createOrder);

router.route('/single/order/:id')
    .get(verifyTokenAndAuthorization, getSingleOrder);

router.route('/orders/me')
    .get(verifyTokenAndAuthorization, getAllOrder);

router.route('/all/orders')
    .get(verifyTokenAndAuthorization, verifyTokenAndAdmin, getAdminAllOrder);

router.route('/delete/order')
    .get(verifyTokenAndAuthorization, deleteOrder);



module.exports = router;