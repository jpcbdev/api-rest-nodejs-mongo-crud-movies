const mongoose = require('mongoose');
const server = 'localhost';
const database = 'cinemax';
function _connect() {
    mongoose.connect(`mongodb://${server}/${database}`, {
            useNewUrlParser: true,
        })
        .then(() => console.log('Db connect'))
        .catch((error) => console.log(error));
}

module.exports = {
    _connect
}