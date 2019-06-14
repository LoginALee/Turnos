const mongoose = require('mongoose');
const URL = 'mongodb://localhost/sistema';

mongoose.connect(URL, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Database is connected');

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongo is disconnected');
            process.exit(0);
        })
    })
});

module.exports = mongoose;