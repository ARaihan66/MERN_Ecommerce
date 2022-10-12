const express = require('express');
const router = express.Router();
const { authentication } = require('../Authentication/Authentication.js');
const { createOrder, getSingleOrder, getAllOrder } = require('../middlewares/OrderController.js');

router.route('/create/order').post(authentication, createOrder);

router.route('/single/order/:id').get(authentication, getSingleOrder);

router.route('/orders/me').get(authentication, getAllOrder);


module.exports = router;