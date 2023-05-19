const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');

exports.create = catchAsync(async (req, res, next) => {
  const { character_id, movie_id } = req.body;

  await db.CharacterMovies.create({
    character_id,
    movie_id,
  });

  res.status(201).json({
    status: 'success',
    message: 'The relationship has been created',
  });
});

exports.findAll = catchAsync(async (req, res, next) => {
  const characterMovie = await db.CharacterMovies.findAll();

  res.status(200).json({
    status: 'success',
    characterMovie,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { characterMovies } = req;
  const { character_id, movie_id } = req.body;

  await characterMovies.update({
    character_id,
    movie_id,
  });

  res.status(200).json({
    status: 'success',
    message: 'The relation has been updated',
    characterMovies,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { characterMovies } = req;

  await characterMovies.update({ status: false });

  res.status(200).json({
    status: 'success',
    message: 'The relation has been disabled',
  });
});
