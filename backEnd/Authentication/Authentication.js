const User = require("../models/UserModel.js");
const jwt = require('jsonwebtoken');


exports.authentication = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(400).json({
            message: "Please Login First!!!"
        })
    }
    const verification = jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
        if (err) return res.status(403).json({
            success: false,
            message: 'Token is not valid'
        })

        req.user = data;
        next();
    });
}


exports.verifyTokenAndAuthorization = (req, res, next) => {
    this.verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({
                success: false,
                message: 'You are not allowed to do that!!'
            })
        }
    })
}


exports.verifyTokenAndAdmin = (req, res, next) => {
    this.verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({
                success: false,
                message: 'You are not allowed to do that!!'
            })
        }
    })
}