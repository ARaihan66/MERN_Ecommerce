const Order = require("../models/orderModel");

// Create Order
exports.createOrder = async (req, res) => {
    const order = await Cart.create(req.body);

    res.status(200).json({
        success: true,
        order,
    });
};

// Update Order
exports.updateOrder = async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, {
        $set: req.body
    });

    if (!cart) {
        return res.status(404).json({
            success: false,
            message: "No Cart Item Is Found With This Id"
        });
    }
};


// Remove Order Item
exports.removeOrderItem = async (req, res, next) => {
    const orderItem = await Order.findById(req.params.id);

    if (!orderItem) {
        return res.status(404).json({
            success: false,
            message: "No cart item is found!!!"
        });
    }

    await orderItem.remove();

    res.status(200).json({
        success: true,
        message: "Item removed from cart",
    });
};

// Get User Orders
exports.userOrders = async (req, res) => {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json({
        success: true,
        order: order
    })
}

// Get All Orders ---> Admin
exports.getAllOrders = async (req, res) => {
    const orderItems = await Order.find();

    res.status(200).json({
        success: true,
        order: orderItems,
    });
};


