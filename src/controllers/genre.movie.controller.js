const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');

exports.create = catchAsync(async (req, res, next) => {
  const { genre_id, movie_id } = req.body;

  const genreMovie = await db.genreMovie.create({
    genre_id,
    movie_id,
  });

  res.status.json({
    status: 'success',
    message: 'Relation has been created',
  });
});

exports.findAll = catchAsync(async (req, res, next) => {
  const genreMovie = await db.genreMovies.findAll();

  res.status(200).json({
    status: 'success',
    genreMovie,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { genreMovie } = req;
  const { genre_id, movie_id } = req.body;

  await genreMovie.update({
    genre_id,
    movie_id,
  });

  res.status(200).json({
    status: 'success',
    message: 'The relation has been updated',
    genreMovie,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { genreMovie } = req;

  await genreMovie.update({ status: false });

  res.status(200).json({
    status: 'success',
    message: 'The relation has been disabled',
  });
});
