const User = require("../models/UserModel")


exports.authentication = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        res.status(400).json({
            message: "Please Login First!!!"
        })
    }
    const verification = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(verification.id);

    next();
}