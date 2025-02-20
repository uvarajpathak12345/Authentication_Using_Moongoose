const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/aut-middleware");
const adminMiddle = require("../middleware/admin-middleware");

router.get("/welcome" ,authmiddleware , adminMiddle, (req,res) => {
    res.status(200).json({
        success:true,
        message:"welcome to the admin page"
    })
})

module.exports = router;