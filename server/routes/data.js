var express = require('express');
var pg = require('pg');

var router = express.Router();

//pg connection String
var connectionString = process.env.DATABASE_URL   || 'postgres://localhost:5432/church';

router.route('/').get(function (req, res) {
  console.log('req query', req.query.last_name);
  var results = [];
  pg.connect(connectionString,function (err, client, done) {
    var query = client.query('SELECT * FROM people WHERE last_name = $1', [req.query.last_name]);
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
