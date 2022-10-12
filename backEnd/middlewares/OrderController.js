const Order = require('../models/OrderModel.js');


//Create Product
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
        message: "Order has Created successfully",
        order: order
    })

}


// Get Single Order
exports.getSingleOrder = async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Product Not Found!!!"
        })
    }

    res.status(200).json({
        success: true,
        order: order
    })

}

// Get All Order 
exports.getAllOrder = async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json({
        success: true,
        orders: orders
    })
}

// Get All Orders----Admin
exports.getAdminAllOrder = async (req, res, next) => {
    const orders = await Order.find();

    if (!orders) {
        return res.status(404).json({
            success: false,
            message: "No Order Found"
        })
    }

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalAmount;
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
}