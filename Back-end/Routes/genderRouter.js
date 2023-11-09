import express from 'express';
import Gender from '../models/GenderModel.js';


const genderRouter = express.Router();

genderRouter.get("/", async (req, res)=> {
    try{
    const response = await Gender.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
})

genderRouter.post("/", async (req, res) => {
    const {gender} = req.body;
    try {
        const response = await Gender.create({gender});
        res.status(201).json(response);

    } catch(err){
        return res.status(500).json(err)
    }
});

export default genderRouter;