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
        enum: ['user', 'admin'],
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },

    token: {
        type: String,
        default: ''
    }

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


module.exports = model("User", userSchema);

