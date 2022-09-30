const User = require('../models/UserModel.js');
const bcrypt = require('bcryptjs');

//regisrer user
exports.createUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'https://test.com',
            url: 'https://test.com'
        }
    })
    const token = user.getJwtToken();
    res.status(200).json({
        message: "Successfully Send!!",
        token: token
    })
}

//user login

exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Please Provide Email Or Password");
    }

    const user = await User.findOne({ email }.select("+password"));

    if (!user) {
        res.status(200).send("User Not Found!!!");
    }
    // const isPasswordMatched = await user.comparePassword(password);
    const isPasswordMatched = await bcrypt.compare(password, this.password);
    if (!isPasswordMatched) {
        return next(
            new ErrorHandler("User is not find with this email & password", 401)
        );
    }


}