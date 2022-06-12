const messageService = require('../services/messages');

const createMessage = async (req, res) => {
  const { content, userId, dialogId } = req.body;
  const { authorization: token } = req.headers;
  const { message, err } = await messageService.createMessage(token, userId, dialogId, content);
  if (err) res.status(err.status).send();
  else res.status(200).json(message);
};


module.exports = { createMessage };
