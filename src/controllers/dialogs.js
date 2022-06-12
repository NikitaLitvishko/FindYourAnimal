const dialogsService = require('../services/dialogs');

const getUserDialogs = async (req, res) => {
  const { skip, take } = req.query;
  const { authorization: token } = req.headers;
  const dialogs = await dialogsService.getUserDialogs(token, skip, take);
  res.status(200).json(dialogs);
};

const getDialog = async (req, res) => {
  const { dialogId } = req.params;
  const { authorization: token } = req.headers;
  const dialog = await dialogsService.getDialog(token, dialogId);
  res.status(200).json(dialog);
};

const createDialog = async (req, res) => {
  const { companionEmail } = req.body;
  const { authorization: token } = req.headers;
  const { dialog, err } = await dialogsService.createDialog(token, companionEmail);
  if (err) res.status(err.status).send();
  else res.status(200).json(dialog);
};

module.exports = {
  getUserDialogs,
  getDialog,
  createDialog,
};
