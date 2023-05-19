const express = require('express');
const { protect } = require('../middlewares/auth.middleware');
const controller = require('../controllers/genre.movie.controller');
const middleware = require('../middlewares/genre.movie.middleware');

const router = express.Router();

router.route('/').get(controller.findAll).post(controller.create);

router
  .route('/:id')
  .patch(middleware.findOne, controller.update)
  .delete(middleware.findOne, controller.delete);

module.exports = router;
