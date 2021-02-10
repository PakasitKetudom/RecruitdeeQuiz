var express = require('express');
var router = express.Router();

var request = require('request');

let url = 'https://api.publicapis.org/categories';

// router.get('/', function(req, res, next) {
//   res.render('quiz2', { title: 'Portfolio' });
// });

router.get('/', function(req, res) {
    request(url, function(error, response, body) {
      const info = JSON.parse(body);
      res.render('quiz2', { info });
    });
  });

module.exports = router;