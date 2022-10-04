const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../middlewares/ProductController.js');
const { authentication, authorizeRole } = require('../middlewares/Authentication');
const router = express.Router();

router.route('/products')
    .get(getAllProducts);

router.route('/product/new')
    .post(authentication, authorizeRole("admin"), createProduct);

router.route('/product/:id')
    .put(authentication, authorizeRole("admin"), updateProduct)
    .delete(authentication, authorizeRole("admin"), deleteProduct)
    .get(getSingleProduct);

module.exports = router;

