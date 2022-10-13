const express = require('express');
const router = express.Router();
const { addToCart, updateCart, removeCartItem } = require('../controllers/CartController.js');

router.route('/add/cartItem')
    .post(addToCart)

router.route('/add/update')
    .post(updateCart)

router.route('/remove/item')
    .post(removeCartItem)



module.exports = router;