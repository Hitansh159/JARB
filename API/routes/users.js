var express = require('express');
const authenticateToken = require('../middleware/auth');
const { createUser } = require('../models/users');
var router = express.Router();

router.post("/validateUser", authenticateToken, (req, res, next)=>{
  res.json({user: req.user});
})

router.post("/addUser", (req, res, next)=>{
  const {name, id, password}  = req.body;
  createUser(name, id, password)
  .then(user=>{
    if(user.id)
      res.json({res:user.id, err:null});
    else
      res.json({res:null, err:"Error in creating user"});
  })
  .catch(err=>{
    res.json({err:err});
  })
})

module.exports = router;
