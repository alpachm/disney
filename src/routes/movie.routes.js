const express = require('express');
const controller = require('../controllers/movie.controller');
const middleware = require('../middlewares/movie.middleware');

const router = express.Router();

router.route('/').get(controller.findAll).post(controller.create);

router.route('/:id').get(middleware.validIfMovieExist);

module.exports = router;
