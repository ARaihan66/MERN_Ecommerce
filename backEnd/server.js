const app = require('./app');
require('dotenv').config();
const databaseConnection = require('./db/Database');


//connect database
databaseConnection();

//create server
const server = app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running successfully!!!');
})