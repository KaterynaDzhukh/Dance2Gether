import express from "express";
import User from "../models/UserModel.js";
import multer from "multer";

const updateProfileRouter = express.Router();

//MiddlewareFunction 
const middlewareUpdateFunction = (req, res, next) => {
    const {aboutMe, profilePicture, morePictures, dance_id, city_id, gender_id}= req.body; 
if(!aboutMe|| !profilePicture || !morePictures || !dance_id ||!city_id || !gender_id){
    return  res.status(403).json({error: 'Please add all information to your profile!'});
}else{
    next()
}
}

//Update information after registration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, "../src/images/");
    },
    filename: function (req, file, cb) {
const uniquSuffix=Date.now();
    cb(null, uniquSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })


updateProfileRouter.put("/:id", middlewareUpdateFunction, upload.single('image'), async (req, res, next) => {
    const id = req.params.id
    const {aboutMe, profilePicture, morePictures, dance_id, city_id, gender_id} = req.body;
    try {
        const response = await User.findByIdAndUpdate(id,{aboutMe, profilePicture, morePictures, dance_id, city_id, gender_id}, {new: true}).populate('city_id').populate('dance_id').populate('gender_id')
        if(!response){
            res.status(404).json({message: "Please add all information"})
        }
        res.status(201).json(response);
    } catch(err){
        console.log(err)
        return next()
    }
})

export default updateProfileRouter;


