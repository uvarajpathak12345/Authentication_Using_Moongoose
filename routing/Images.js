const express = require("express");
const authmiddleware = require("../middleware/aut-middleware");
const adminMiddle = require("../middleware/admin-middleware");
const uploadMiddleware = require("../middleware/Imagemiddleware");
const ImageController = require('../controller/Imagecontroller');
const routes = express.Router();

routes.post("/image" , authmiddleware , adminMiddle , uploadMiddleware.single('image') , ImageController )