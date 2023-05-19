const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');

exports.findOne = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const characterMovies = await db.CharacterMovies.findOne({
    where: {
      id,
    },
  });

  if (!characterMovies) next(new AppError('Relation not found', 404));

  req.characterMovies = characterMovies;

  next();
});
