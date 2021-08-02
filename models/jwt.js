const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

module.exports.createToken = (id) => {
  const token = jwt.sign({ id }, SECRET_KEY);
  return token;
};
  
module.exports.verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
};