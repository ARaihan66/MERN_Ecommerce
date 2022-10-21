const User = require("../models/UserModel.js");
const jwt = require('jsonwebtoken');


exports.authentication = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(400).json({
            message: "Please Login First!!!"
        })
    }
    const verification = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(verification.id);
    next();
}


//admin role
exports.authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            res.status(400).json({
                message: "User unable to access the resources!!!",
            })
        }
        next();
    }
}