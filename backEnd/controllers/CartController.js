const Cart = require("../models/CartModel");

// Create Cart
exports.createCart = async (req, res) => {
    const cart = await Cart.create(req.body);

    res.status(200).json({
        success: true,
        cart,
    });
};

// Update Cart Item
exports.updateCart = async (req, res) => {
    const cart = await Cart.findByIdAndUpdate(req.params.id, {
        $set: req.body
    });

    if (!cart) {
        return res.status(404).json({
            success: false,
            message: "No Cart Item Is Found With This Id"
        });
    }
};


// Remove Cart Item
exports.removeCartItem = async (req, res, next) => {
    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
        return res.status(404).json({
            success: false,
            message: "No cart item is found!!!"
        });
    }

    await cartItem.remove();

    res.status(200).json({
        success: true,
        message: "Item removed from cart",
    });
};

// Get User Cart
exports.userCart = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json({
        success: true,
        Cart: cart
    })
}

// Get All Carts ---> Admin
exports.getAllCarts = async (req, res, next) => {
    const cartItems = await Cart.find();

    res.status(200).json({
        success: true,
        carts: cartItems,
    });
};


