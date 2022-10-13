const Cart = require("../models/CartModel");

// Add to wishlist
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
    const cartList = await Wishlist.create({
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
        cartList,
    });
};