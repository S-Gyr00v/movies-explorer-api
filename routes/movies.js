const router = require('express').Router();
const { moviesCreateValidation } = require('../utils/validation');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', moviesCreateValidation, createMovie);

router.delete('/:id', deleteMovie);

module.exports = router;
