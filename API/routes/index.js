var express = require('express');
var router = express.Router();
var authenticateToken = require("../middleware/auth");

/* GET home page. */
router.get('/',  function (req, res, next) {
  res.json({"name": "hello", "data": ["heila"]});
});

router.use("/home", authenticateToken, (req, res)=>{
  res.send(req.user);
})

module.exports = router;
