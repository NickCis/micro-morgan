const morgan = require('morgan');
const promisify = require('util').promisify;

module.exports = (...args) => {
  const logger = promisify(morgan(...args));
  return fn => async (req, res) => {
    await logger(req, res);
    return fn(req, res);
  };
};
