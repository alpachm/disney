const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');

exports.create = catchAsync(async (req, res, next) => {
  const { image, title, creationDate, score } = req.body;

  const movie = await db.Movie.create({
    image,
    title,
    creationDate,
    score,
  });

  res.status(201).json({
    status: 'success',
    message: 'The movie has been created',
    movie,
  });
});

exports.findAll = catchAsync(async (req, res, next) => {
  const movies = await db.Movie.findAll({
    where: {
      status: true,
    },
  });

  if (!movies.length) next(new AppError(`We can't found any movie`, 404));

  res.status(200).json({
    status: 'success',
    message: 'All movies has been found',
    results: movies.length,
    movies,
  });
});
