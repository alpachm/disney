const express = require('express');
const controller = require('../controllers/character.controller');
const middleware = require('../middlewares/character.middleware');

const router = express.Router();

router.route('/').get(controller.findAll).post(controller.create);

router
  .route('/:id')
  .get(middleware.validIfCharacterExist, controller.finOne)
  .patch(middleware.validIfCharacterExist, controller.update)
  .delete(middleware.validIfCharacterExist, controller.delete);

module.exports = router;
