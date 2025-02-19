const express = require('express');
const routes = express.Router();
const {getting  , posting} = require('../controller/control')


routes.get('/login' , getting);
routes.post('/signup' , posting);


module.exports = routes;