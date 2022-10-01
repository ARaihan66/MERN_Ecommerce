
const User = require('../models/UserModel.js');


//regisrer user
exports.createUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        return res.send("User Already Registered!!!");
    }
    user = await User.create({
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

    const user = await User.findOne({ email: email })
    if (!user) {
        res.status(200).send("User Not Found!!!");
    }

    const token = user.getJwtToken();
    const isPasswordMatched = user.comparePassword(password);


    if (!isPasswordMatched) {
        return res.send("Password Incorrect!!!");
    }

    res.status(200).json({
        message: 'Login Successfull',
        token: token
    })

}