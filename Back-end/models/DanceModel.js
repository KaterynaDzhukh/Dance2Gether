import mongoose from "mongoose";

const DanceSchema = new mongoose.Schema({
    danceName: {
        type: String,
        required: true,
        unique: true
    }  
})

const Dance = mongoose.model("Dance", DanceSchema)

export default Dance