import express from 'express';
import Article from '../models/ArticlesModelHomepage.js';


const articleRouter = express.Router();

const handleErrors = (err, req, res, next) => {
    //Perform some action on the request or response
    console.log(err);
    const statusCode = err.statusCode || 500;
    const statusMessage = err.message || "Internal server error";
    res.status(statusCode).json({error: statusMessage})
    
}
articleRouter.get("/", async (req, res)=> {
    try{
    const response = await Article.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
}, handleErrors)


articleRouter.post("/", async (req, res, next) => {
    try {
        const {articleName, articleImage, articleText } = req.body;
        const response = await Article.create({articleName, articleImage, articleText });
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

export default articleRouter;