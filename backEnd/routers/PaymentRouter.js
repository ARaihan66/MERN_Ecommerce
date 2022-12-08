const router = require('express').Router();
const { payment } = require('../controllers/PaymentController');
router.route('/payment')
    .post(payment)

module.exports = router;