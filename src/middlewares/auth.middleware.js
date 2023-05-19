const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const db = require('../database/models/index');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token)
    next(
      new AppError('You are not logged in. Please log in to get access', 401)
    );

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.SECREET_SEED_JWT
  );

  const user = await db.User.findOne({
    where: {
      id: decoded.id,
      status: true,
    },
  });

  if (!user)
    next(new AppError('The owner of this token it not longer available', 401));

  req.sessionUser = user;

  next();
});
