const User = require('../repository/messages');

const createMessage = async (token, userId, dialogId, content) => {
  const foundUser = await User.findByToken(token);
  const relatedDialog = await Dialogs.validateDialog(foundUser.email, dialogId)
  if (!relatedDialog) return { err: { status: 403 } };
  const message = await User.createMessage(userId, dialogId, content);
  return message;
};

module.exports = { createMessage };
