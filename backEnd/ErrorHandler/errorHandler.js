module.exports = (err, req, res, next) => {
    res.status(200).json({
        success: false,
        message: err.message
    })
}