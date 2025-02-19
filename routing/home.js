const express = require("express");
const routes = express.Router();
const authmiddleware = require("../middleware/aut-middleware");

routes.get("/welcome" , authmiddleware, (req, res) => {
    const data = req.userinfo;
    res.status(200).json({
        sucess:true,
        message:data
        
    })
})

module.exports = routes;