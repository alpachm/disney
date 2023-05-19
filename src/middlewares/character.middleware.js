const db = require('../database/models/index');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.validIfCharacterExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const character = await db.Character.findOne({
    where: {
      id,
      status: true,
    },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [
      {
        model: db.CharacterMovies,
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

  if (!character)
    next(new AppError(`The character with id ${id} was not found`));

  req.character = character;

  next();
});
