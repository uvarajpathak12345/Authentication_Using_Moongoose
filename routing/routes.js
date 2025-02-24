const express = require('express');
const routes = express.Router();
const {getting  , posting , Updating} = require('../controller/control')


routes.get('/login' , getting);
routes.post('/signup' , posting);
routes.patch("/update" , Updating)


module.exports = routes;