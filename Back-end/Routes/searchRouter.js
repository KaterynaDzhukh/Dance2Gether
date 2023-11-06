import express from 'express';
import User from '../models/UserModel.js';


const searchRouter = express.Router();

searchRouter.get("/", async (req, res)=> {

    try{
    const response = await User.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
})

export default searchRouter