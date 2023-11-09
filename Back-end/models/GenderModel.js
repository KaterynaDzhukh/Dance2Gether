import mongoose from "mongoose";

const GenderSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        unique: true
    }  
})

const Gender = mongoose.model("Gender", GenderSchema)

export default Gender