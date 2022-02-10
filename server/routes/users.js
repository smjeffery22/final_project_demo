var express = require('express');
var router = express.Router();

const users = ['Ian', 'Valentin', 'JP', 'Cassie', 'Stellaris'];

module.exports = () => {
  router.get('/', (req, res) => {
    res.json(users);
  });

  return router;
}
