const Cart = require("../models/CartModel");

// Add to wishlist
// add To Cart
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

// Update Cart
exports.updateCart = async (req, res, next) => {
    const {
        quantity,
    } = req.body;
    const cart = await Cart.findByIdAndUpdate(req.params.id);

    if (!cart) {
        return next(new ErrorHandler("No cart found with this id", 404));
    }

    await cart.update({
        quantity,
    });
};
