const Cart = require("../models/CartModel");

// Add To Cart
exports.addToCart = async (req, res, next) => {
    const {
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    } = req.body;
    const cart = await Cart.create({
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    });

    res.status(200).json({
        success: true,
        cart,
    });
};

// Get Cart Item
exports.getCartItem = async (req, res, next) => {
    const cartItem = await Cart.find({ userId: req.user.id });
    res.status(200).json({
        success: true,
        cartItem,
    });
};

// Update Cart Item
exports.updateCart = async (req, res, next) => {
    const {
        quantity,
    } = req.body;
    const cart = await Cart.findByIdAndUpdate(req.params.id);

    if (!cart) {
        return res.status(404).json({
            success: false,
            message: "No Cart Item Is Found With This Id"
        });
    }

    await cart.update({
        quantity,
    });
};


// Remove Cart Item
exports.removeCartItem = async (req, res, next) => {
    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
        return res.status(404).json({
            success: false,
            message: "No cart item is found with this id"
        });
    }

    await cartItem.remove();

    res.status(200).json({
        success: true,
        message: "Item removed from cart",
    });
};


