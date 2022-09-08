const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const checkURL = (value, helpers) => {
  const isValidURL = validator.isURL(value, {
    require_protocol: true,
  });

  return isValidURL
    ? value
    : helpers.message('Invalid URL');
};

const moviesCreateValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(checkURL),
    trailerLink: Joi.string().required().custom(checkURL),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().custom(checkURL),
    movieId: Joi.number().required(),
  }),
});

const userUpdateValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }).unknown(true),
});

const singinValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const signupValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const movieIdValidation = celebrate({
  body: Joi.object().keys({
    id: Joi.string().hex().length(24),
  }),
});

module.exports = {
  moviesCreateValidation,
  userUpdateValidation,
  singinValidation,
  signupValidation,
  movieIdValidation,
};
