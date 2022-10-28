const { Schema, model } = require('mongoose');
const validator = require('validator');

const otpSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [validator.isEmail, 'Email is not valid'],
        lowercase: true,
        unique: true
    },
    otp: {
        type: Number
    },
    expiredAt: {
        type: Date,
        expires: 300
    }
})

const otpModel = model('otp', otpSchema);
module.exports = otpModel;