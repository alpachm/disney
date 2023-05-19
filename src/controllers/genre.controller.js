const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');
const { Op } = require('sequelize');

exports.create = catchAsync(async (req, res, next) => {
  const { name, image } = req.body;

  const genre = await db.Genre.create({
    name,
    image,
  });

  res.status(201).json({
    status: 'success',
    message: 'The genre has been created',
    genre,
  });
});

exports.findAll = catchAsync(async (req, res, next) => {
  const { name } = req.query;

  let whereClause = {
    status: true,
  };

  if (name) {
    whereClause.name = {
      [Op.like]: `%${name}%`,
    };
  }

  const genres = await db.Genre.findAll({
    where: whereClause,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [
      {
        model: db.genreMovies,
        attributes: ['id'],
        include: [
          {
            model: db.Movie,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
      },
    ],
  });

  if (!genres.length) next(new AppError(`We couldn't find any genre`, 404));

  res.status(200).json({
    status: 'success',
    message: 'All genres has been found',
    results: genres.length,
    genres,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { genre } = req;
  const { name, image } = req.body;

  await genre.update({
    name,
    image,
  });

  res.status(200).json({
    status: 'success',
    message: 'The genre has been updated',
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { genre } = req;

  await genre.update({
    status: false,
  });

  res.status(200).json({
    status: 'success',
    message: 'The genre has been disabled',
  });
});
