const User = require('../models/UserModel.js');
const sendToken = require('../Feature/jwtToken');
const sendMail = require('../Feature/sendMail');
const crypto = require("crypto");
const { findById } = require('../models/UserModel.js');

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
        res.status(200).send("User Not Found!!!");
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
        message: "Log out success",
    });
};



// Forgot Password
exports.forgorPassword = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).json({
            message: "User not found"
        })
    }
    //Get Reset Password Token
    const resetToken = user.getResetToken();

    await user.save({
        validateBeforeSave: false
    })

    const resetPasswordUrl = `{req.protocol}://${req.get("host")}/password/reset/${resetToken}`;
    const message = `Your Password Reset Token is :  ${resetPasswordUrl}`;

    try {

        await sendMail({
            email: user.email,
            subject: `Password Recovery`,
            message: message
        })

        res.status(200).json({
            message: `Email sent to ${user.email} successfully`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTime = undefined;

        await user.save({
            validateBeforeSave: false
        })

        return res.send(`Email is not sent to "${user.email}"`);
    }
}


//Reset Password
exports.resetPassword = async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordTime: { $gt: Date.now() }
    })

    if (!user) {
        res.send("User not found!!")
    }

    if (req.body.password !== req.body.confirmPassword) {
        res.send("Password is not matched!!")
    }

    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordTime = undefined;

    await user.save();
}


// User profile details
exports.userDetails = async (req, res) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        message: "Successfully get profile information",
        user: user
    })
}

//Update user password
exports.updatePassword = async (req, res, next) => {
    const user = await User.findById(req.user.id);

    const isPasswordMatched = user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return res.status(401).json({
            message: "Password is not matched!!"
        })
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return res.status(401).json({
            message: " Password is not matched with confirm password"
        })
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
}
