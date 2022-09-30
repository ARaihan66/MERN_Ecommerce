const express = require('express');
const app = express();

app.use(express.json());


//import route
const product = require('./route/ProductRoute');
const user = require('./route/UserRoute.js')


app.use('/api', product);
app.use('/api', user);


module.exports = app;