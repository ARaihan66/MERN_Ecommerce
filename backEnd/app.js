const express = require('express');
const cookieParser = require('cookie-parser');
const errorHandler = require("./ErrorHandler/errorHandler");
const app = express();


app.use(express.json());
app.use(cookieParser());

//Import Route
const product = require('./routers/ProductRouter.js');
const user = require('./routers/UserRouter.js')
const order = require('./routers/OrderRouter.js')
const cart = require('./routers/CartRouter.js')


app.use('/api/user', user);
app.use('/api/product', product);
app.use('/api/order', order);
app.use('/api/cart', cart);

app.use(errorHandler);

module.exports = app;