const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');

exports.validIfMovieExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const movie = await db.Movie.findOne({
    where: {
      id,
      status: true,
    },
  });

  if (!movie) next(new AppError('The movie was not found', 404));

  req.movie = movie;

  next();
});
