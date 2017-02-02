var router = require('express').Router();

router.get('/', function(req, res){
  res.send('Cake is fake');
});


module.exports = router;
