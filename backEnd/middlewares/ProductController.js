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

//Create new review or update the review
exports.createProductReview = async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment);
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
};

// Get all reviews of a single product
exports.getSingleProductReviews = async (req, res) => {
    const product = await Product.findById(req.query.id);

    if (!product) {
        return res.status(404).json({
            message: "Product is not found!!",
        })
    }

    res.status(200).json({
        message: "Successful",
        product: product
    })
}

// Delete review --Admin
exports.deleteReview = async (req, res, next) => {
    const product = await Product.findById(req.query.productId);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    });

    let ratings = 0;

    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / reviews.length;
    }

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    });
};

