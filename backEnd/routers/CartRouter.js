const express = require('express');
const router = express.Router();
const { addToCart } = require('../controllers/CartController.js');

router.route('/add/cartItem')
    .post(addToCart)

module.exports = router;