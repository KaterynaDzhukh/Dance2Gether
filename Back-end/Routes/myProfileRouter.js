import express from "express";
import User from "../models/UserModel.js";

const myProfileRouter = express.Router();

//Get User by ID after
myProfileRouter.get("/:id", async(req, res)=> {
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

myProfileRouter.put("/:id", async (req, res, next) => {
    const id = req.params.id
    const {userName, aboutMe, profilePicture, morePictures, dance_id, city_id, gender_id} = req.body;
    try {
        const response = await User.findByIdAndUpdate(id,{userName, aboutMe, profilePicture, morePictures, dance_id, city_id, gender_id}, {new: true}).populate('city_id').populate('dance_id').populate('gender_id')
        if(!response){
            res.status(404).json({message: "Please edit information"})
        }
        res.status(201).json(response);
    } catch(err){
        res.status(500).json(err)
    }
})


export default myProfileRouter;
