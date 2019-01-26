const mongoose = require('mongoose');
// const validator = require('validator');

let movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    stars: {
        type: Array,
        required: true,
    },
    genders: {
        type: Array,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    writers: {
        type: String,
        required: true,
    },
    year: {
        type: Date,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Movie', movieSchema);

// La propiedad unique de validacion me dio errores por duplicacion de datos