var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest:'uploads/'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/upload',upload.single("file"),(req,res,next) =>{

  var size = req.file.size;
  
  res.send("The size of the file is: " + size + " bytes");

})

module.exports = router;
