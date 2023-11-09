import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
        unique: true
    }

    
})

const City = mongoose.model("City", CitySchema)

export default City