const express = require('express');
const controller = require('../controllers/movie.controller');
const middleware = require('../middlewares/movie.middleware');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(protect);

router.route('/').get(controller.findAll).post(controller.create);

router
  .route('/:id')
  .get(middleware.validIfMovieExist, controller.findOne)
  .patch(middleware.validIfMovieExist, controller.update)
  .delete(middleware.validIfMovieExist, controller.delete);

module.exports = router;
