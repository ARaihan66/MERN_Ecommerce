const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
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
        minlength: [4, 'Password Minimum Length Will 4 Characters'],
        maxlength: [8, 'Password Maximum Length Will 8 Characters'],
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
    if (!this.isModified("password")) {
        next();
    }
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, parseInt(salt));
});



// jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

//compare password
userSchema.methods.comparePassword = async function (givenPassword) {
    return await bcrypt.compare(givenPassword, this.password, (err, res) => {

    });
}

//forgot password
userSchema.methods.getResetToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordTime = Date.now() + 15 * 60 * 3000;
}

module.exports = model("User", userSchema);

