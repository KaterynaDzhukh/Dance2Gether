import express from 'express';
import User from "../models/UserModel.js";

const homepageLoggedIn = express.Router();

const handleErrors = (err, req, res, next) => {
    //Perform some action on the request or response
    console.log(err);
    const statusCode = err.statusCode || 500;
    const statusMessage = err.message || "Internal server error";
    res.status(statusCode).json({error: statusMessage})
    
}
homepageLoggedIn.get("/", async (req, res)=> {
    try{
    const response = await User.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
}, handleErrors)

export default homepageLoggedIn