const { Schema, model, mongoose } = require('mongoose');

const productSchema = Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true,
        maxLength: [20, "Maximum Lenght is Twenty"]
    },

    description: {
        type: String,
        required: [true, "Please Add Description of Your Product"],
        maxLength: 4000
    },
    price: {
        type: Number,
        required: [true, "Please Add Price"],
        maxLength: 8,
    },
    discountPrice: {
        type: String,
        maxLength: 4
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    }
    ],
    category: {
        type: String,
        required: [true, "Please Add a Category of Your Product"]
    },
    stock: {
        type: Number,
        required: [true, "Please Add Some Stock For Your Product"],
        maxLength: 3
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
        },
        time: {
            type: Date,
            default: Date.now()
        }
    }],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

module.exports = model("Product", productSchema)