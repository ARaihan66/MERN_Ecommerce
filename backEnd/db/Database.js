const mongoose = require('mongoose');


const databaseConnection = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Database Connected Successfully!!!')
        }).catch((error) => {
            console.log('Connection Failed!!!')
        })
}

module.exports = databaseConnection;