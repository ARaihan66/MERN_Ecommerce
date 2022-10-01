const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());


//import route
const product = require('./route/ProductRoute');
const user = require('./route/UserRoute.js')


app.use('/api', product);
app.use('/api', user);


module.exports = app;