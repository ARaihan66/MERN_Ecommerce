const { Schema, model } = require('mongoose');
const { validate } = require('./ProductModel');

const otpSchema = Schema({
    email: {
        type: String,
        required: [true, 'Email is required'];
        validate: [validator.isEmail, 'Email is not valid'],
        unique: true
    },
    otp: {
        type: Number,
        default: ''
    }

})

const otpModel = model('otp', otpSchema);
module.exports = otpModel;