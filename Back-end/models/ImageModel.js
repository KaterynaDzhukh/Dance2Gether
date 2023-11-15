import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    imageBase64: String,
});

const Image = mongoose.model("Image", ImageSchema);

export {Image, ImageSchema};