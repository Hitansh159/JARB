var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const {validateUser} =  require('../models/users');

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET);
}

router.post('/', function(req, res, next) {
  if(validateUser(req.body.id, req.body.password)){
    const token = generateAccessToken(req.body.id);
    res.json({token: token, err: null});
  }
  else
    res.status(403).json({err:"Incorrect ID password "})
});


module.exports = router;
