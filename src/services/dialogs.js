const Dialogs = require('../repository/dialogs');
const User = require('../repository/users');

const USERS_PER_PAGE = 10;

const getUserDialogs = async (token, skip = 0, take = USERS_PER_PAGE) => {
  const foundUser = await User.findByToken(token);
  const dialogs = await Dialogs.findUserDialogs(foundUser.email, skip, take);
  return dialogs.map(({ id, user1, user2 }) => ({
    id,
    companion: user1 === foundUser.email ? user2 : user1,
  }));
};

const getDialog = async (token, dialogId) => {
  const foundUser = await User.findByToken(token);
  const relatedDialog = await Dialogs.validateDialog(foundUser.email, dialogId)
  if (!relatedDialog) return { err: { status: 403 } };
  const dialog = await Dialogs.findDialog(dialogId);
  return dialog;
};

const createDialog = async (token, companionEmail) => {
  const foundUser = await User.findByToken(token);
  const dialog = await Dialogs.createDialog(foundUser.email, companionEmail);
  return dialog;
};

module.exports = { getUserDialogs, getDialog, createDialog };
