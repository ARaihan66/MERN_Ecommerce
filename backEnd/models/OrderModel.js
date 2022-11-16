const { Schema, model, mongoose } = require("mongoose");

const orderSchema = Schema({
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
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        default: 'Pending'
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model("Order", orderSchema);