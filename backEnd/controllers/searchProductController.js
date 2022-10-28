const Product = require('../models/ProductModel');

exports.searchProduct = async (req, res) => {
    const keyword = red.body.keyword;
    let { page, sort } = req.query;

    if (!page) page = 1;
    const skip = (page - 1) * 10;

    const products = await Product.find({ name: { $regex: '.*' + keyword + '.*', $options: 'i' } }).sort({ [sort]: -1 }).skip(skip).limit(10);

    if (products.length == 0) {
        res.status(404).json({
            success: false,
            message: "Product is not found!!"
        })
    }

    res.status(200).json({
        success: true,
        Page: page,
        Products: products
    })
}