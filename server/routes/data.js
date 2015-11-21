var express = require('express');
var pg = require('pg');

var router = express.Router();

//pg connection String
var connectionString = process.env.DATABASE_URL   || 'postgres://localhost:5432/church';

router.route('/').get(function (req, res) {
  console.log('query parameters from client:', req.query);
  var results = [];
  var firstNameParam = req.query.first_name + '%';
  var lastNameParam = req.query.last_name + '%';
  var emailParam = req.query.email + '%';
  console.log('query params', firstNameParam, lastNameParam, emailParam);
  pg.connect(connectionString,function (err, client, done) {
    var query = client.query('SELECT * FROM people WHERE' +
                              ' first_name ILIKE $1 AND last_name ILIKE $2' +
                              ' AND email ILIKE $3',
     [firstNameParam, lastNameParam, emailParam]);
    query.on('row', function (row) {
      results.push(row);
    });
    query.on('end',function () {
      client.end();
      res.json(results);
    });
  });
});

module.exports = router;
