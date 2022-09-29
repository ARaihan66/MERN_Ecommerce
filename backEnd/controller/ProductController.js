const Product = require("../models/ProductModel.js");
const Features = require("../Feature/Feature.js")


//create product
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product: product
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

//get all product
exports.getAllProducts = async (req, res) => {
    try {
        const resultPerPage = 8;
        const productCount = await Product.countDocuments();
        const feature = new Features(Product.find(), req.query).search().filter().pagination(resultPerPage);
        const products = await Features.query;

        res.status(200).json({
            success: true,
            products
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

//update product
exports.updateProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.param.id);

        if (!product) {
            return res.status(500).json({
                mwssage: 'Product not found'
            })
        }
        product = await Product.findByIdAndUpdate(req.param.id, req.body);
        res.status(200).json({
            product: product
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

//delete products
exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.param.id);

        if (!product) {
            return res.status(500).json({
                mwssage: 'Product not found'
            })
        }
        //await Product.remove();
        product = await Product.findByIdAndDelete(req.param.id);
        res.status(200).json({
            product: product
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


//single product details
exports.getSingleProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.param.id);

        if (!product) {
            return res.status(500).json({
                mwssage: 'Product not found'
            })
        }

        res.status(200).json({
            product: product,
            productCount
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}