const Order = require('../models/OrderModel.js');

exports.createOrder = async (req, res, next) => {
    const {
        shippingInfo,
        orderItem,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body
    const order = await Order.create({
        shippingInfo,
        orderItem,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    });

    res.status(200).json({
        success: true,
        message: "Order has Created successfully "
    })

}
