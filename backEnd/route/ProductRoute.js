const express = require('express');
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    createProductReview,
    getSingleProductReviews
} = require('../middlewares/ProductController.js');
const { authentication, authorizeRole } = require('../Authentication/Authentication.js');
const router = express.Router();

router.route('/products')
    .get(getAllProducts);

router.route('/product/new')
    .post(authentication, authorizeRole("admin"), createProduct);

router.route('/product/:id')
    .put(authentication, authorizeRole("admin"), updateProduct)
    .delete(authentication, authorizeRole("admin"), deleteProduct)
    .get(getSingleProduct);

router.route('/product/review').post(authentication, createProductReview);
router.route('/reviews').get(getSingleProductReviews);

module.exports = router;

