import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
    reviewTitle: {
        type: String,
        required: true,
   
    },  
    
    reviewImage:{
        type: String,
        required: true
     },

    
    reviewText: {
        type: String,
        required: true
    }, 
    
    
})

const Review = mongoose.model("Review", ReviewsSchema);

export default Review