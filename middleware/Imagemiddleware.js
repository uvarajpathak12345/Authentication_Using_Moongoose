const multer  = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null , "uploads/")
    },
    filename: function(req,file,cb){
        cb(null , 
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        )
    }
})

const checkFileFilter = (req,file,cb) => {
    if(file.mimetype.startsWith('image')){
        cd(null, true)
    }else{
        cd(new Error('not an image! please upload image only'));
    }
}

module.exports = multer({
    storage : storage,
    fileFilter: checkFileFilter,
    limits: 5 * 1024 * 1024 //this will be file size of 5 mb
}) 