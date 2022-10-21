const User = require('../models/UserModel.js');
const sendToken = require('../Utils/jwtToken');
const sendMail = require('../Utils/sendMail');
const randomstring = require('randomstring');
const bcrypt = require('bcrypt');
const crypto = require("crypto");

//User Registration
exports.createUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        return res.json({
            message: "User Already Registered!!!"
        });
    }
    user = await User.create({
        name: name,
        email: email,
        password: password,
        avatar: {
            public_id: 'https://test.com',
            url: 'https://test.com'
        }
    })

    sendToken(user, 200, res);
}



//User Login
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Please Provide Email Or Password");
    }

    const user = await User.findOne({ email: email })
    if (!user) {
        return res.status(200).send("User Not Found!!!");
    }

    const isPasswordMatched = user.comparePassword(password);


    if (!isPasswordMatched) {
        return res.send("Password Incorrect!!!");
    }

    sendToken(user, 201, res);
}



//User Logout
exports.userLogout = async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        message: "Log out successful",
    });
};


// User profile details
exports.userDetails = async (req, res) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        message: "Successfully get profile information",
        user: user
    })
}

// User profile update
exports.updateProfile = async (req, res, next) => {

    let user = await User.findById(req.user.id);

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User is not found with this email !!"
        })
    }

    if (user.email === req.body.email) {
        return res.status(400).json({
            success: false,
            message: "User is already registered with this email !!"
        })
    }

    const updatedData = {
        name: req.body.name,
        email: req.body.email
    }

    user = await User.findByIdAndUpdate(req.user.id, updatedData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    await user.save();

    res.status(200).json({
        message: 'Profile is successfully updated!!',
        updatedUser: user
    })

}

// Update password
exports.updatePassword = async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User is not found !!"
        })
    }

    const isPasswordMatched = user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return res.status(401).json({
            success: false,
            message: "Password is not matched!!"
        })
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return res.status(401).json({
            success: false,
            message: "New password is not match with confirm password"
        })
    }

    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res);

}

// Forget password
exports.forgetPassword = async (req, res) => {
    const { email } = req.body;
    let userData = await User.findOne({ email });
    if (!userData) {
        return res.status(400).json({
            success: false,
            message: "User is not found with this email !!"
        })
    }

    const tempToken = randomstring.generate();

    const user = await User.updateOne({ email }, { $set: { token: tempToken } });
    sendMail(userData.name, userData.email, tempToken);

    res.status(400).json({
        success: true,
        message: "Please check your mail and reset password !!"
    })

}


// Reset password
exports.resetPassword = async (req, res) => {
    const token = req.query.token;

    const tokenData = await User.findOne({ token: token });
    if (!tokenData) {
        return res.status(400).json({
            seccess: false,
            message: "User is not found with this mail !!"
        })
    }

    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({
            seccess: false,
            message: "Password and confirm password is not matched !!"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate({ _id: tokenData._id }, { $set: { password: hashPassword, randomToken: '' } }, { new: true });

    res.status(200).json({
        success: true,
        message: "Password is successfully reseted !!",
        User: user
    })
}

// Get all user ------ Admin
exports.getAllUser = async (req, res) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        Users: users
    })
}


// Get single user detail ----- Admin
exports.getSingleUser = async (req, res) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(401).json({
            success: false,
            message: "User is not found !!"
        })
    }

    res.status(200).json({
        success: true,
        User: user
    })

}
