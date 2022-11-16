const app = require('./app');
const dotenv = require('dotenv');
const databaseConnection = require('../db/Database');


//config
dotenv.config({
    path: 'backEnd/config/.env'
})

//connect database
databaseConnection();

//create server
const server = app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running successfully!!!');
})