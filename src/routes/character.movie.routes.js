const express = require('express');
const controller = require('../controllers/character.movie.controller');
const middleware = require('../middlewares/character.movies.middleware');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(protect);

router.route('/').get(controller.findAll).post(controller.create);

router
  .route('/:id')
  .patch(middleware.findOne, controller.update)
  .delete(middleware.findOne, controller.delete);

module.exports = router;
