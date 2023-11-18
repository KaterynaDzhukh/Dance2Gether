import express from "express";
import User from "../models/UserModel.js";
//import multer from "multer";


const profileRouter = express.Router();


profileRouter.put("/update/:id",  async (req, res) => {
    const id = req.params.id
    const {aboutMe, dance_id, city_id, gender_id} = req.body;
    try {
        const response = await User.findByIdAndUpdate(id,{userName, aboutMe, dance_id, city_id, gender_id},
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