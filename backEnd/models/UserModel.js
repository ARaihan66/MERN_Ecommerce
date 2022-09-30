const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        minlength: 3,
        maxlength: 15,
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        validate: [validator.isEmail, "Please Enter a Valid Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minlength: [8, 'Password Max Lenght Will 8 Characters'],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
});

//hash password
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

// //compare password
// userSchema.methods.comparePassword = async function (givenPassword) {
//     return await bcrypt.compare(givenPassword, this.password)
// }

module.exports = model("User", userSchema);

