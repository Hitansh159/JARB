const mysql = require('mysql2');
const crypto = require('crypto');
const sha256 = crypto.createHash('sha256');

function connector() {
  return mysql.createConnection({
    user: "hitansh",
    password: "test",
    host: "localhost",
    database: "test"  
  });
}

function hash(pwd){
  var res = "";
  sha256.update(pwd, "utf8");
  res = sha256.digest("base64");
  return res;
}

module.exports = { connector, hash};