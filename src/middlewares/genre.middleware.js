const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../database/models/index');

exports.findOne = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const genre = await db.Genre.findOne({
    where: {
      id,
    },
  });

  if (!genre) next(new AppError('The genre was not found', 404));

  req.genre = genre;

  next();
});
