const User = require('../models/UserModel.js');
const sendToken = require('../Utils/jwtToken');
const Otp = require('../models/OtpModel');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

//User Registration Sending OTP
exports.createOTP = async (req, res) => {
    const { email } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        return res.status(400).json({
            message: "User Already Registered!!!"
        });
    }

    const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: "OTP Code For Validation", // Subject line
        text: OTP, // plain text body
    }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            console.log("Mail has seccessfully sent", data.response)
        }
    })



    const otpUser = await Otp.findOne({ email });

    if (!otpUser) {
        await Otp.create({
            email: email,
            otp: OTP
        })
    }
    else {
        await Otp.updateOne({ email: email }, {
            $set: {
                otp: OTP
            }
        }, { new: true })
    }

    res.status(200).json({
        success: true,
        OTP: OTP
    })
}


//User Registration Receiving OTP
exports.createUser = async (req, res) => {
    const { otp, name, password, confirmPassword } = req.body;
    let otpUser = await Otp.findOne({ otp: otp });
    if (!otpUser) {
        return res.status(400).json({
            success: false,
            message: "Time Expired or Wrong OTP"
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Password doesn't mathch!!!"
        });
    }

    const user = await User.create({
        otp: otp,
        name: name,
        email: otpUser.email,
        password: password
    })

    res.status(200).json({
        success: true,
        User: user
    })
}



//User Login
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please Provide Email Or Password");
    }

    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(400).send("User Not Found!!!");
    }

    const isPasswordMatched = await user.comparePassword(password);


    if (!isPasswordMatched) {
        return res.status(401).send("Password Incorrect!!!");
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
        message: "Successfully user profile information",
        user: user
    })
}


// Update password
exports.updatePassword = async (req, res, next) => {

    const oldPassword = req.user.password;

    const user = await User.findById(req.user.id);

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User is not found !!"
        })
    }

    const isPasswordMatched = user.comparePassword(oldPassword);

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

// Forget Password Sending OTP
exports.forgetPassword = async (req, res) => {
    const { email } = req.body;

    let user = await User.findOne({ email: email });
    if (!user) {
        return res.status(400).json({
            message: "User not found with this email!!!"
        });
    }


    const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: "OTP Code For Validation", // Subject line
        text: OTP, // plain text body
    }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            console.log("Mail has seccessfully sent", data.response)
        }
    })

    const otpUser = await Otp.findOne({ email });

    if (!otpUser) {
        await Otp.create({
            email: email,
            otp: OTP
        })
    }
    else {
        await Otp.updateOne({ email: email }, {
            $set: {
                otp: OTP
            }
        }, { new: true })
    }

    res.status(200).json({
        success: true,
        OTP: OTP
    })


}


// Reset password
exports.resetPassword = async (req, res) => {
    const { otp, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({
            seccess: false,
            message: "Password and confirm password is not matched !!"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const otpUser = await Otp.findOne({ otp: otp });

    if (otp === otpUser.otp) {
        const user = await User.updateOne({ email: otpUser.email }, {
            $set: {
                otp: otp,
                password: hashPassword,
            }
        }, { new: true })
        res.status(200).json({
            success: true,
            message: `Password: ${hashPassword}`
        })
    }
    else {
        return res.status(400).json({
            seccess: false,
            message: "OTP not match!!!"
        })
    }
}

// Get all user ------ Admin
exports.getAllUser = async (req, res) => {
    const { page, sort } = req.query;

    if (!page) return page = 1;
    const skip = (page - 1) * 10;

    const users = await User.find().sort({ [sort]: -1 }).skip(skip).limit(10);

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
