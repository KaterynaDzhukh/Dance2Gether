import express from 'express';
import Review from '../models/Review.js';


const reviewRouter = express.Router();

const handleErrors = (err, req, res, next) => {
    //Perform some action on the request or response
    console.log(err);
    const statusCode = err.statusCode || 500;
    const statusMessage = err.message || "Internal server error";
    res.status(statusCode).json({error: statusMessage})
    
}
reviewRouter.get("/", async (req, res)=> {
    try{
    const response = await Review.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
}, handleErrors)


reviewRouter.post("/", async (req, res, next) => {
    try {
        const {reviewTitle, reviewImage, reviewText } = req.body;
        const response = await Review.create({reviewTitle, reviewImage, reviewText });
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

reviewRouter.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await Review.findById(id);
        if(!response){
            return next({statusCode: 400, message: "Artical does not exist"})
        }
        console.log(response, 'response')
        res.json(response);
    } catch(err){
      //  res.status(403).json(err)
        console.log(err)
        return next()
    }
}, handleErrors);

export default reviewRouter;