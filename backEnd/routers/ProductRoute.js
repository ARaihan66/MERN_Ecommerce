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
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../Authentication/Authentication.js');
const router = express.Router();

router.route('/create/product')
    .post(verifyTokenAndAdmin, createProduct);

router.route('/products')
    .get(getAllProducts);

router.route('/product/:id')
    .put(verifyTokenAndAuthorization, verifyTokenAndAdmin, updateProduct)
    .delete(verifyTokenAndAuthorization, verifyTokenAndAdmin, deleteProduct)
    .get(getSingleProduct);

router.route('/create/product/review')
    .post(verifyTokenAndAuthorization, createProductReview);

router.route('/single/reviews')
    .get(getSingleProductReviews);

router.route('/review/delete')
    .delete(verifyTokenAndAuthorization, verifyTokenAndAdmin, deleteReview);

module.exports = router;

