import express from "express";
import User from "../models/UserModel.js";
import multer from "multer";

const profileRouter = express.Router();

//MiddlewareFunction 
const middlewareUpdateFunction = (req, res, next) => {
    const {aboutMe, profilePicture, morePicture, dance_id, city_id, gender_id}= req.body; 
if(!aboutMe|| !profilePicture || !morePicture || !dance_id ||!city_id || !gender_id){
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


profileRouter.put("/update/:id", middlewareUpdateFunction, upload.single('image'), async (req, res, next) => {
    const id = req.params.id
    const {aboutMe, profilePicture, morePicture, dance_id, city_id, gender_id} = req.body;
    try {
        const response = await User.findByIdAndUpdate(id,{aboutMe, profilePicture, morePicture, dance_id, city_id, gender_id}, {new: true}).populate('city_id').populate('dance_id').populate('gender_id')
        if(!response){
            res.status(404).json({message: "Please add all information"})
        }
        res.status(201).json(response);
    } catch(err){
        console.log(err)
        return next()
    }
})



//Get Users Profile
profileRouter.get("/", async(req, res)=> {
    try {
    const response = await User.find()
    if(!response){
        res.status(404).json({message: "Users do not exist"})
    }
    res.status(200).json(response)
    } catch(err){
        res.status(500).json(err);
    }
});

//Get User Profile
profileRouter.get("/:id", async(req, res)=> {
    try {
    const {id} = req.params
    const response = await User.findById(id)
    if(!response){
        res.status(404).json({message: "User does not exist"})
    }
    res.status(200).json(response)
    } catch(err){
        res.status(500).json(err);
    }
});


//Get User Profile after registration
profileRouter.get("/myProfile/:id", async(req, res)=> {
    try {
    const {id} = req.params
    const response = await User.findById(id)
    if(!response){
        res.status(404).json({message: "User does not exist"})
    }
    res.status(200).json(response)
    } catch(err){
        res.status(500).json(err);
    }
});

profileRouter.put("/myProfile/:id", async (req, res) => {
    const id = req.params.id
    const {userName, aboutMe, profilePicture, morePicture, dance_id, city_id, gender_id} = req.body;
    try {
        const response = await User.findByIdAndUpdate(id,{userName, aboutMe, profilePicture, morePicture, dance_id, city_id, gender_id}, {new: true}).populate('city_id').populate('dance_id').populate('gender_id')
        if(!response){
            res.status(404).json({message: "Please edit information"})
        }
        res.status(201).json(response);
    } catch(err){
        res.status(500).json(err)
    }
})

export default profileRouter;