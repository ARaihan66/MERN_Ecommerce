const express = require('express');
const router = express.Router();
const { authentication, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../Authentication/Authentication.js');
const { createOrder, updateOrder, removeOrderItem, userOrders, getAllOrders } = require('../controllers/OrderController.js');


router.route('/create/order')
    .post(authentication, createOrder)

router.route('/add/update')
    .put(verifyTokenAndAuthorization, updateOrder)

router.route('/remove/item')
    .delete(verifyTokenAndAuthorization, removeOrderItem)

router.route('/find/:userId')
    .get(verifyTokenAndAuthorization, userOrders)

router.route('/all/orders')
    .get(verifyTokenAndAdmin, getAllOrders)


module.exports = router;