const rateLimiter = require('express-rate-limit');

const TOO_MANY_REQUEST = 'Слишком много запросов, повторите попытку позже';

module.exports = rateLimiter({
  windowMs: 15 * 6e4,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: TOO_MANY_REQUEST },
});
