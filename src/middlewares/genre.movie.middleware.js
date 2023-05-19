const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');

exports.findOne = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const genreMovie = await db.genreMovies.findOne({
    where: {
      id,
    },
  });

  if (!genreMovie) next(new AppError('Relation not found', 404));

  req.genreMovie = genreMovie;

  next();
});
