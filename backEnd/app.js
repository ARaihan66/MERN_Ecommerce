const express = require('express');
const cookieParser = require('cookie-parser');
const errorHandler = require("./ErrorHandler/errorHandler");
const app = express();

//Import Route
const product = require('./routers/ProductRoute.js');
const user = require('./routers/UserRoute.js')
const order = require('./routers/OrderRouter.js')
const cart = require('./routers/CartRouter.js')



app.use(express.json());
app.use(cookieParser());


app.use('/api/user', user);
app.use('/api/product', product);
app.use('/api/order', order);
app.use('/api/cart', cart);

app.use(errorHandler);

module.exports = app;