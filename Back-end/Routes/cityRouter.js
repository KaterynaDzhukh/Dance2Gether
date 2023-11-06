import express from 'express';
import City from '../models/CityModel.js';


const cityRouter = express.Router();

cityRouter.get("/", async (req, res)=> {
    try{
    const response = await City.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
})

cityRouter.post("/", async (req, res) => {
    const {cityName} = req.body;
    try {
        const response = await City.create({cityName});
        res.status(201).json(response);

    } catch(err){
        return res.status(500).json(err)
    }
});

export default cityRouter;