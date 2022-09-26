const express = require('express');
const app = express();

app.use(express.json());


//import route
const product = require('./route/ProductRoute');

app.get("/", (req, res) => {
    res.send("Hello This is home page")
})

app.use('/api/v2', product);


module.exports = app;