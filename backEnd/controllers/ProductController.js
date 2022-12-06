const Product = require("../models/ProductModel.js");


//Create product
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product: product
    })
}

//Get all product
exports.getAllProducts = async (req, res) => {
    let qNew = req.query.new;
    let qCategory = req.query.category;

    if (!page) return page = 1;
    const skip = (page - 1) * 5;

    let products;

    if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5)
    } else if (qCategory) {
        products = await Product.find({
            categories: {
                $in: [qCategory],
            }
        })
    } else {
        products = await Product.find().sort({ createdAt: -1 }).skip(skip).limit(5);
    }
    res.status(200).json({
        success: true,
        page: page,
        products: products
    })
}

//Get single product details
exports.getSingleProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            message: 'Product not found with this id'
        })
    }

    res.status(200).json({
        success: true,
        product: product
    })

}

//Update product
exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not found this id'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json({
        success: true,
        product: product
    })
}

//Delete products
exports.deleteProduct = async (req, res) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not found with this id'
        })
    }

    product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true,
        message: "Product has been deleted successfully",
        product: product
    })
}
