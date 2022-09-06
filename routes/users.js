const router = require('express').Router();
const { userUpdateValidation } = require('../utils/validation');
const {
  getUser,
  updateUser,
} = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', userUpdateValidation, updateUser);

module.exports = router;
