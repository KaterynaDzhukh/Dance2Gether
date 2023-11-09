import mongoose from "mongoose";

const SliderSchema = new mongoose.Schema({
    sliderImage: {
        type: String,
        required: true,
    }
    
  
    
})

const Slider = mongoose.model("Slider", SliderSchema);

export default Slider