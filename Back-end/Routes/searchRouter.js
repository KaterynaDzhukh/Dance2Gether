import express from 'express';
import User from '../models/UserModel.js';



const searchRouter = express.Router();

searchRouter.get("/:cityId/:danceId", async (req, res)=> {
    const cityId = req.params.cityId
    const dancestyle = req.params.danceId
    try{
    const response = await User.find({$or:[{dance_id: dancestyle}, {city_id: cityId}]});
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
})

export default searchRouter