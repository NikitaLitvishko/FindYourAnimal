const router = require('express').Router();

const { authorized } = require('../middlewares/authorized');
const { getUserDialogs, createDialog, getDialog } = require('../controllers/dialogs');

router.use(authorized);

router.get('/', getUserDialogs);
router.post('/', createDialog);
router.get('/:dialogId', getDialog);

module.exports = router;
