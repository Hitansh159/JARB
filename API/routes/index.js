var database = require('../models/databaseUtility');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('pages/login', {});
});

router.get('/test', function (req, res, next) {
  console.log("start conneting......")
  var connector = database.connector()

  connector.connect(function (err) {

    if (err) {
      throw err;
    }
    else {
      var sql = 'SELECT * FROM user WHERE name = ?';
      var values = [
        ['joe']
      ]

      connector.query(sql, [values], (err, res, fields) => {
        if (err)
          console.log(err);
        else {
          console.log(res.length);
          console.log(fields);
        }
      })
      res.send("done!");
      console.log("DB connected");
    }
  });
});

router.get('/add', function (req, res, next) {
  console.log("start conneting......")
  var connector = database.connector()

  connector.connect(function (err) {

    if (err) {
      throw err;
    }
    else {
      var pas = "aaa";
      var sql = 'INSERT INTO user(`name`, `password`) VALUES ?';
      var values = [
        ['charli', database.hash(pas)]
      ]

      connector.query(sql, [values], (err, res, fields) => {
        if (err)
          console.log(err);
        else {
          console.log(res.length);
          console.log(fields);
        }
      })
      res.send("done!");
      console.log("DB connected");
    }
  });
});

module.exports = router;
