const express = require('express');
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    createProductReview,
    getSingleProductReviews,
    deleteReview
} = require('../controllers/ProductController.js');
const { authentication, authorizeRole } = require('../Authentication/Authentication.js');
const router = express.Router();

router.route('/product/new')
    .post(authentication, authorizeRole("admin"), createProduct);

router.route('/products')
    .get(getAllProducts);

router.route('/product/:id')
    .put(authentication, authorizeRole("admin"), updateProduct)
    .delete(authentication, authorizeRole("admin"), deleteProduct)
    .get(getSingleProduct);

router.route('/product/review')
    .post(authentication, createProductReview);

router.route('/reviews')
    .get(getSingleProductReviews);

router.route('/review/delete')
    .delete(authentication, authorizeRole("admin"), deleteReview);

module.exports = router;

