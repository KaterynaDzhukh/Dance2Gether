import express from "express";
import User from "../models/UserModel.js";
import multer from "multer";


const profileRouter = express.Router();

//MiddlewareFunction 
const middlewareUpdateFunction = (req, res, next) => {
    const {aboutMe, dance_id, city_id, gender_id}= req.body; 
if(!aboutMe  || !dance_id ||!city_id || !gender_id){
    return  res.status(403).json({error: 'Please add all information to your profile!'});
}else{
    next()
}
}


//Update information after registration
const storage = multer.memoryStorage(
    {filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix +  file.originalname)
}})

const upload = multer({storage: storage})

profileRouter.put("/update/:id", async (req, res) => {
//     const newImage = new Image({
//         filename: req.file.originalname,
//         contentType: req.file.mimetype,
//         imageBase64: req.file.buffer.toString('base64'),
// });
    const id = req.params.id
    const {aboutMe,  dance_id, city_id, gender_id} = req.body;
    try {
        const response = await User.findByIdAndUpdate(id,{aboutMe, dance_id, city_id, gender_id},
        {new: true}).populate('city_id').populate('dance_id').populate('gender_id')
        if(!response){
            res.status(404).json({message: "Please add all information"})
        }
        res.status(201).json(response);
    } catch(err){
        console.log(err)
    }
})

//Get all users
profileRouter.get("/",  async (req, res)=> {
    try{
    const response = await User.find();
    res.json(response)

} catch(err){
    res.status(500).json(err)
}
})

//Get my Profile
profileRouter.get("/:id", async(req, res)=> {
    try {
    const {id} = req.params
    const response = await User.findById(id).populate('city_id').populate('dance_id').populate('gender_id')
    if(!response){
        res.status(404).json({message: "User does not exist"})
    }
    res.status(200).json(response)
    } catch(err){
        res.status(500).json(err);
    }
});

//Get user Profile
profileRouter.get("/user/:id", async(req, res)=> {
    try {
        const {id} = req.params
        const response = await User.findById(id).populate('city_id').populate('dance_id').populate('gender_id')
    if(!response){
        res.status(404).json({message: "Users do not exist"})
    }
    res.status(200).json(response)
    } catch(err){
        res.status(500).json(err);
    }
});


export default profileRouter;