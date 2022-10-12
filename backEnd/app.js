const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//Import Route
const product = require('./route/ProductRoute');
const user = require('./route/UserRoute.js')
const order = require('./route/OrderRouter.js')



app.use(express.json());
app.use(cookieParser());


app.use('/api', product);
app.use('/api', user);
app.use('/api', order);

module.exports = app;