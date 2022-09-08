const router = require('express').Router();
const userRouter = require('./users');
const moviesRouter = require('./movies');
const notFound = require('../controllers/notFound');
const { singinValidation, signupValidation } = require('../utils/validation');
const { login, createUser } = require('../controllers/users');
const { userAuthorization } = require('../middlewares/auth');

router.use('/users', userAuthorization, userRouter);
router.use('/movies', userAuthorization, moviesRouter);

router.post('/signin', singinValidation, login);

router.post('/signup', signupValidation, createUser);
router.use('/', userAuthorization, notFound);
module.exports = router;
