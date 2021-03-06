const router = require('express').Router();
const { signup, signin, logout, assign, getUsers, getUser } = require('../controllers/users');
const { authorized } = require('../middlewares/authorized');
const {
  validateSignUp,
  validateSignIn,
  validateDescriprion,
} = require('../middlewares/validateUsers');

router.post('/signup', validateSignUp, signup);
router.put('/signin', validateSignIn, signin);
router.use(authorized);
router.put('/logout', logout);
router.post('/assign', validateDescriprion, assign);
router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;
