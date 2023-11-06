import express from 'express';
import Dance from '../models/DanceModel.js';


const danceRouter = express.Router();

danceRouter.get("/", async (req, res)=> {
    try{
    const response = await Dance.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
})

danceRouter.post("/", async (req, res) => {
    const {danceName} = req.body;
    try {
        const response = await Dance.create({danceName});
        res.status(201).json(response);

    } catch(err){
        return res.status(500).json(err)
    }
});

export default danceRouter;
