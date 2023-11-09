import express from 'express';
import Slider from '../models/SliderModel.js';


const sliderRouter = express.Router();

const handleErrors = (err, req, res, next) => {
    //Perform some action on the request or response
    console.log(err);
    const statusCode = err.statusCode || 500;
    const statusMessage = err.message || "Internal server error";
    res.status(statusCode).json({error: statusMessage})
    
}
sliderRouter.get("/", async (req, res)=> {
    try{
    const response = await Slider.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
}, handleErrors)


sliderRouter.post("/", async (req, res, next) => {
    try {
        const {sliderImage } = req.body;
        const response = await Slider.create({sliderImage});
        if(!response){
            return next({statusCode: 400, message: "You can't create a Artical"})
        }
        console.log(response, 'response')
        res.json(response);
    } catch(err){
      //  res.status(403).json(err)
        console.log(err)
        return next()
    }
}, handleErrors);

export default sliderRouter;