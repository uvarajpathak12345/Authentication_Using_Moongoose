const adminMiddle = (req,res,next) => {
    if(!req.userinfo.username == "boss"){
         res.status(200).json({
            success:false,
            message:"denied"
         })
    }
    next();
}
module.exports = adminMiddle;