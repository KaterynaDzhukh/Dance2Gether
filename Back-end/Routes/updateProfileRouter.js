import express from "express";
import User from "../models/UserModel.js";

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

//Get User by ID after Registration
updateProfileRouter.get("/:id", async(req, res)=> {
    try {
    const {id} = req.params
    console.log(id)
    const response = await User.findById(id)
    res.json(response)
    } catch(err){
        res.status(500).json(err);
    }
});


//Update information after registration
updateProfileRouter.put("/:id", middlewareUpdateFunction, async (req, res, next) => {
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


