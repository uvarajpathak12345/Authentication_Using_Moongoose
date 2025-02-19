require("dotenv").config();
const express = require('express');
const Dbconnect = require('./dbConnect/db');
const authroutes = require('./routing/routes');
const HomeRoute = require("./routing/home");
const adminRoute = require("./routing/admin");


Dbconnect()

const app = express();
app.use(express.json());
app.use('/auth' , authroutes);
app.use('/home' , HomeRoute);
app.use('/admin' , adminRoute);

app.listen(process.env.PORT , () => {
    console.log("server is listening on the port 3000");
})