import express from "express";
import User from "../models/UserModel.js";

const profileRouter = express.Router();

//Get User by ID after
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

export default profileRouter;


