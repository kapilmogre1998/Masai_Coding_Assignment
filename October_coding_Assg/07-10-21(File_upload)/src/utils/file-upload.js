const path = require('path');

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"));
    },
    filename: function (req, file, cb) {
      const uniquepreffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniquepreffix+"-"+file.originalname )
    }
  })
  
  const fileFilter =   function fileFilter (req, file, cb) {
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    if(file.mimetype == "image/png" || file.mimetype == "image/jpeg")
    cb(null, true);
  
    // To reject this file pass `false`, like so:
    else
    cb(null, false);
  }

const upload = multer({
    storage: storage,  //File path
    limits:{
        fileSize:1024*1024*5  //1024 - 1KB , 1KB * 1KB * 5 = 5MB
    },
    fileFilter: fileFilter  //fileFilter :- The file type
})

module.exports = upload;