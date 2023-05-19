const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');
const { Op } = require('sequelize');

exports.create = catchAsync(async (req, res, next) => {
  const { name, age, weight, biography, image } = req.body;

  const character = await db.Character.create({
    name: name.toLowerCase(),
    age,
    weight,
    biography: biography.toLowerCase(),
    image,
  });

  res.status(201).json({
    status: 'success',
    message: 'The character has been created',
    character,
  });
});

exports.findAll = catchAsync(async (req, res, next) => {
  const { name, age, movie } = req.query;

  let characters;

  let whereClause = {
    status: true,
  };

  if (name) {
    whereClause.name = {
      [Op.like]: `%${name}%`,
    };
  } else if (age) {
    whereClause.age = age;
  }

  characters = await db.Character.findAll({
    where: whereClause,
  });

  if (!characters.length) next(new AppError('Characters not found', 404));

  res.status(200).json({
    status: 'success',
    message: 'The characters has been found',
    results: characters.length,
    characters,
    name,
  });
});

exports.finOne = catchAsync(async (req, res, next) => {
  const { character } = req;

  res.status(200).json({
    status: 'success',
    message: 'The character has been found',
    character,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { character } = req;
  const { name, age, weight, biography, image } = req.body;

  await character.update({
    name: name.toLowerCase() || character.name,
    age: age || character.age,
    weight: weight || character.weight,
    biography: biography.toLowerCase() || character.biography,
    image: image || character.image,
  });

  res.status(200).json({
    status: 'success',
    message: 'The character has been updated',
    character,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { character } = req;

  await character.update({ status: false });

  res.status(200).json({
    status: 'success',
    message: 'The user has been disabled',
  });
});
