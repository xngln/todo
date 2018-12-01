const { User } = require('../models/user');

let authenticate = (req, res, next) => {
  console.log('***');
  console.log('***');
  console.log('***');
  let token = req.session.token;
  console.log(req.sessionID);
  console.log('***');
  console.log(req.session);

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();
  }).catch((err) => {
    res.status(401).send({});
  });
};

module.exports = { authenticate };