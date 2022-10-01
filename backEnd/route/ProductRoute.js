const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../middlewares/ProductController.js');
const { authentication } = require('../middlewares/Authentication');
const router = express.Router();

router.route('/products').get(getAllProducts);
router.route('/product/new').post(authentication, createProduct);
router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getSingleProduct);

module.exports = router;

