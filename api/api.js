const Router = require('express').Router();
Router
    .get('/movies', require('../controllers/movieController.js').getMovies)
    .get('/movies/:id', require('../controllers/movieController.js').getMovie)
    .post('/movies', require('../controllers/movieController.js').addMovie)
    .put('/movies/:id', require('../controllers/movieController.js').updateMovie)
    .delete('/movies/:id', require('../controllers/movieController.js').deleteMovie)
module.exports = Router;