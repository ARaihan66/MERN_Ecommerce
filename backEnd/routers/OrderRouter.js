const express = require('express');
const router = express.Router();
const { authentication, authorizeRole } = require('../Authentication/Authentication.js');
const { createOrder, getSingleOrder, getAllOrder, getAdminAllOrder, deleteOrder } = require('../controllers/OrderController.js');

router.route('/create/order')
    .post(authentication, createOrder);

router.route('/single/order/:id')
    .get(authentication, getSingleOrder);

router.route('/orders/me')
    .get(authentication, getAllOrder);

router.route('/all/orders')
    .get(authentication, getAdminAllOrder);

router.route('/delete/order')
    .get(authentication, deleteOrder);



module.exports = router;