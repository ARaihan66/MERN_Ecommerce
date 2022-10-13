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

// Update Order Status ---Admin
exports.updateAdminOrder = async (req, res, next) => {

    const order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order Not Found"

        });
    }

    if (order.orderStatus === "Delivered") {
        return res.status(400).json({
            success: false,
            message: "You have already delivered this order"

        });
    }

    if (req.body.status === "Shipped") {
        order.orderItems.forEach(async (o) => {
            await updateStock(o.product, o.quantity);
        });
    }
    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
    });
};

async function updateStock(id, quantity) {

    const product = await Product.findById(id);

    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false });
}


// Delete Order ---Admin
exports.deleteOrder = async (req, res, next) => {

    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
    }

    await order.remove();

    res.status(200).json({
        success: true,
    });
};
