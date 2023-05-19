const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');
const { Op } = require('sequelize');

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
  const { name, genre, order } = req.query;

  let movies;

  let whereClause = {
    status: true,
  };

  if (name) {
    whereClause.title = { [Op.like]: `%${name}%` };
  }

  if (genre) {
  }

  movies = await db.Movie.findAll({
    where: whereClause,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [
      {
        model: db.CharacterMovies,
        attributes: ['id'],
        include: [
          {
            model: db.Character,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
      },
    ],
  });

  if (order === 'ASC') movies.sort((a, b) => a.creationDate - b.creationDate);
  if (order === 'DESC') movies.sort((a, b) => b.creationDate - a.creationDate);

  if (!movies.length) next(new AppError(`We can't found any movie`, 404));

  res.status(200).json({
    status: 'success',
    message: 'All movies has been found',
    results: movies.length,
    movies,
  });
});

exports.findOne = catchAsync(async (req, res, next) => {
  const { movie } = req;

  res.status(200).json({
    status: 'success',
    message: 'The movie has been found',
    movie,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { movie } = req;
  const { image, title, creationDate, score } = req.body;

  await movie.update({
    image,
    title,
    creationDate,
    score,
  });

  res.status(200).json({
    status: 'success',
    message: 'The movie has been updated',
    movie,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { movie } = req;

  await movie.update({ status: false });

  res.status(200).json({
    status: 'success',
    message: 'The movie has been disabled',
  });
});
