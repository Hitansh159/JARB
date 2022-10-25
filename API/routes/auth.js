var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const {validateUser} =  require('../models/users');

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET);
}

router.post('/', async function(req, res, next) {
  let userAuth = await validateUser(req.body.id, req.body.password);
  if(userAuth){
    const token = generateAccessToken(req.body.id);
    res.json({token: token, err: null});
  }
  else
    res.status(403).json({err:"Incorrect ID password "})
});


module.exports = router;
