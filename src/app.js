const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const globalErrorHandler = require('./controllers/error.controller');
const AppError = require('./utils/appError');
const authRouter = require('./routes/auth.routes');
const characterRouter = require('./routes/character.routes');
const movieRouter = require('./routes/movie.routes');
const genreRouter = require('./routes/genre.routes');
const character_movie_router = require('./routes/character.movie.routes');
const genre_movies_router = require('./routes/genre.movies.routes');

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

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/characters', characterRouter);
app.use('/api/v1/movies', movieRouter);
app.use('/api/v1/genres', genreRouter);
app.use('/api/v1/character_movie', character_movie_router);
app.use('/api/v1/genre_movie', genre_movies_router);

app.all('*', (req, res, next) =>
  next(
    new AppError(`The route ${req.originalUrl} was not found in this site`, 404)
  )
);

app.use(globalErrorHandler);

module.exports = app;
