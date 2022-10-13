const express = require('express');
const router = express.Router();
const { addToCart, updateCart, removeCartItem, getCartItem } = require('../controllers/CartController.js');

router.route('/addToCart')
    .post(addToCart)

router.route('/items')
    .put(getCartItem)

router.route('/add/update')
    .put(updateCart)

router.route('/remove/item')
    .delete(removeCartItem)



module.exports = router;