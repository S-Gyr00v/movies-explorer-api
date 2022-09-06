require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('./middlewares/cors');
const NotFoundError = require('./errors/notFoundError');
const routes = require('./routes');
const error = require('./middlewares/error');

const { PORT = 3002, NODE_ENV, BD_URL } = process.env;
const app = express();
const { requestLogger, errorLogger } = require('./middlewares/logger');

app.use(cors);
mongoose.connect(NODE_ENV === 'production' ? BD_URL : 'mongodb://localhost:27017/moviesdb');

app.use(express.json());
app.use(requestLogger);

app.use(routes);

app.use((req, res, next) => {
  next(new NotFoundError('Обращение к несуществующей странице'));
});
app.use(errorLogger);
app.use(errors());
app.use(error);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
