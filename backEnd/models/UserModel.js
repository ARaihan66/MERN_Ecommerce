const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = Schema({
    otp: {
        type: Number
    },
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        minlength: 3,
        maxlength: 15,
    },
    email: {
        type: String,
        default: '',
        unique: true,
    },
    password: {
        type: String,
        minlength: [4, "Minimum length of password is 4 charecters"],
        maxlenght: [15, "Maximum length of password is 15 charecters"],
        required: [true, "Password is required"]
    },
    confirmPassword: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
        default: ''
    }

}, { timestamps: true });

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
    return jwt.sign({ id: this._id, isAdmin: this.isAdmin }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

//compare password
userSchema.methods.comparePassword = async function (givenPassword) {
    return await bcrypt.compare(givenPassword, this.password);
}


const userModel = model("User", userSchema);
module.exports = userModel;

