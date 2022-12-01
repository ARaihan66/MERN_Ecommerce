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
    let { page, sort } = req.query;

    if (!page) page = 1;
    const skip = (page - 1) * 3;

    const products = await Product.find().sort({ [sort]: -1 }).skip(skip).limit(3);

    if (products.length == 0) {
        return res.status(404).json({
            success: false,
            message: "Product is not found!!!"
        })
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
        message: "Product was deleted successfully",
        product: product
    })
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
        Product: product
    });
};

// Get all reviews of a single product
exports.getSingleProductReviews = async (req, res) => {
    const product = await Product.findById(req.params.productId);

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
exports.deleteReview = async (req, res) => {
    const product = await Product.findById(req.params.productId);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    // const reviews = product.reviews.filter(
    //     (rev) => rev._id.toString() !== req.params.id.toString()
    // );

    // let avg = 0;

    // reviews.forEach((rev) => {
    //     avg += rev.rating;
    // });

    // let ratings = 0;

    // if (reviews.length === 0) {
    //     ratings = 0;
    // } else {
    //     ratings = avg / reviews.length;
    // }

    // const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.params.productId,
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

