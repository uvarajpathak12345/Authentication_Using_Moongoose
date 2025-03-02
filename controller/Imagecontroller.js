const ImageModel = require("../model/image");
const uploadToCloudinary = require("../helper/cloudinaryhelper");

const ImageController = async (req, res) => {
    try {
        console.log(req.file); 

        if (!req.file) {
            return res.status(404).json({
                success: false,
                message: "file not found!!"
            });
        }

        const { Image_url, Image_publicKey } = await uploadToCloudinary(req.file.path);
        
        
        const response = await ImageModel.create({
            ImageUrl: Image_url,
            publicKey: Image_publicKey,
            uploadedBy:req.userinfo.username
        });
       
        res.status(200).json({
            success: true,
            message: "successfully Image uploaded",
            data:response
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = ImageController;