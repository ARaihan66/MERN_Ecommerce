const { Schema, model } = require("mongoose");

const cartSchema = Schema({
    userId: {
        type: String,
        required: true
    },
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
}, { timestamps: true });

module.exports = model("Cart", cartSchema);
