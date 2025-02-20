const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (filepath) => {
    try{
        const response = await cloudinary.uploader.upload(filepath);
        return{
            Image_url: response.secure_url,
            Image_publicKey: response.public_id
        }

    }catch(err){
        console.error("Failed during Upload" , err);
        throw new Error ('Error while uploading in cloudinary');
        
    }
}

module.exports = uploadToCloudinary;