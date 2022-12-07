const express = require('express');
const router = express.Router();
const { createCart, updateCart, removeCartItem, userCart, getAllCarts } = require('../controllers/CartController.js');
const { authentication, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../Authentication/Authentication')

router.route('/create/cart')
    .post(authentication, createCart)

router.route('/add/update')
    .put(verifyTokenAndAuthorization, updateCart)

router.route('/remove/item')
    .delete(verifyTokenAndAuthorization, removeCartItem)

router.route('/find/:userId')
    .get(verifyTokenAndAuthorization, userCart)

router.route('/all/carts')
    .get(verifyTokenAndAdmin, getAllCarts)

module.exports = router;