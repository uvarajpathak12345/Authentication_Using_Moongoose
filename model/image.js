const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    ImageUrl: {
        type:String,
        required:[true, "Image url is required"]
    },
    publicKey: {
        type:String,
        required:true
    },
    uploadedBy: {
        type:String,
        required:true
    }
} , {timestamps:true})

const ImageModel = mongoose.model("Images" , ImageSchema);
module.exports = ImageModel;