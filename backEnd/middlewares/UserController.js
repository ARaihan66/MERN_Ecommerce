const User = require('../models/UserModel.js');
const sendToken = require('../Feature/jwtToken');


//regisrer user
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

    const isPasswordMatched = user.comparePassword(password);


    if (!isPasswordMatched) {
        return res.send("Password Incorrect!!!");
    }

    sendToken(user, 201, res);
}

//user log out
exports.userLogout = async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        message: "Log out success",
    });
};