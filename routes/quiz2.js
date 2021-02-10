var express = require('express');
var router = express.Router();

var request = require('request');

let url = 'https://api.publicapis.org/categories';

router.get('/', function(req, res) {
    request(url, function(error, response, body) {
      const categories = JSON.parse(body);
      res.render('quiz2', { categories });
    });
  });

module.exports = router;