const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const db = require('../database/models/index');
const bcrypt = require('bcrypt');
const generateJWT = require('../utils/generateJWT');

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await db.User.create({
    name: name.toLowerCase(),
    email: email.toLowerCase(),
    password: encryptedPassword,
  });

  const token = await generateJWT(user.id);

  res.status(201).json({
    status: 'success',
    message: 'The user has been created',
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await db.User.findOne({
    where: {
      email,
      status: true,
    },
  });

  if (!user) next(new AppError('Email or password incorrectly'));

  if (!(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Email or password incorrectly', 401));
  }

  const token = await generateJWT(user.id);

  res.status(200).json({
    status: 'success',
    message: 'The user has successfully logged in',
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
});
