/* eslint-disable func-names */
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authToken = req.headers.authorization;
  if (authToken === undefined) {
    return res.status(403).json({ sucess: false, message: 'Solicitação não Autenticada!' });
  }
  const bearer = authToken.split(' ');
  const token = bearer[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const { code } = req.body;
    return decoded.authcode === code
      ? next()
      : res.status(403).json({ sucess: false, message: 'Código Invalido!' });
  } catch (err) {
    return res.status(403).json({ sucess: false, message: 'Solicitação não Autenticada!' });
  }
};
