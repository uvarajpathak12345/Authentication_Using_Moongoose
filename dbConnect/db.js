const mongoose = require('mongoose');

async function Dbconnect () {
    try{
      await mongoose.connect(process.env.DB_connect);
      console.log("data connection success");
    }catch(err){
        return (" db connect get failed:" , err);
    }
}
module.exports = Dbconnect