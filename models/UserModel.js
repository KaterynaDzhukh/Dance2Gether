import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },  

    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1024,
    },




/* 
    tags: [{
        type: String
    }],

    img: {
        type: String,
       
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }, 
    location: {
        lat: { type: Number},
        lng: { type: Number},
        address: { type: String}
      }, */
     
    
}, {timestamps: true})

const DanceDB = mongoose.model("DanceDB", UserSchema)

export default DanceDB
