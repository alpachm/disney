const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const globalErrorHandler = require('./controllers/error.controller');
const AppError = require('./utils/appError');

const app = express();

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requets from this IP. Please try again in one hour',
});

app.use(helmet());
app.use(express.json());
app.use(xss());
app.use(hpp());
app.use(cors());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1', limiter);

app.all('*', (req, res, next) =>
  next(
    new AppError(`The route ${req.originalUrl} was not found in this site`, 404)
  )
);

app.use(globalErrorHandler);

module.exports = app;
