import mongoose from "mongoose";

const ArticlesSchema = new mongoose.Schema({
    articleName: {
        type: String,
        required: true,
   
    },  
    
    articleImage:{
        type: String,
        required: true
     },

    
    articleText: {
        type: String,
        required: true
    }, 
    
    
})

const Article = mongoose.model("Article", ArticlesSchema);

export default Article