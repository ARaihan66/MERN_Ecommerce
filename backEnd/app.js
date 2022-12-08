const express = require('express');
const cookieParser = require('cookie-parser');
const errorHandler = require("./ErrorHandler/errorHandler");
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Import Route
const product = require('./routers/ProductRouter.js');
const user = require('./routers/UserRouter.js')
const order = require('./routers/OrderRouter.js')
const cart = require('./routers/CartRouter.js')
const payment = require('./routers/PaymentRouter')


app.use('/api/user', user);
app.use('/api/product', product);
app.use('/api/order', order);
app.use('/api/cart', cart);
app.use('api/checkout', payment)

app.use(errorHandler);

module.exports = app;