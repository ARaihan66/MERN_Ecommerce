// Create token and saving that in cookies
const sendToken = (user, statusCode, res) => {

    const token = user.getJwtToken();

    res.status(statusCode).cookie("token", token, {
        expires: new Date(
            Date.now() + 2000 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }).json({
        message: "Successful",
        User: user,
        Token: token
    });
}

module.exports = sendToken;