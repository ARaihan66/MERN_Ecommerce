const express = require('express');
const {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getSingleProduct,
    createProductReview,
    getSingleProductReviews,
    deleteReview
} = require('../controllers/ProductController.js');
const { authentication, authorizeRole } = require('../Authentication/Authentication.js');
const router = express.Router();

router.route('/create/product')
    .post(authentication, authorizeRole("admin"), createProduct);

router.route('/products')
    .get(getAllProducts);

router.route('/product/:id')
    .put(authentication, authorizeRole("admin"), updateProduct)
    .delete(authentication, authorizeRole("admin"), deleteProduct)
    .get(getSingleProduct);

router.route('/create/product/review')
    .post(authentication, createProductReview);

router.route('/single/reviews')
    .get(getSingleProductReviews);

router.route('/review/delete')
    .delete(authentication, authorizeRole("admin"), deleteReview);

module.exports = router;

