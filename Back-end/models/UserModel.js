import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        trim: true,
        unique: true
    },  

    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim: true
    },

    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1024,
        trim: true
    },
     dance_id: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dance'
    }],
    aboutMe: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        trim: true
    },
    profilePicture: {
        type: String,
        required: true,
        trim: true
    },
    city_id: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
    morePictures: [{
        type: String,
        required: true,
        trim: true
    }],
    gender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gender'
    } 
}, {timestamps: true})

const User = mongoose.model("User", UserSchema)

export default User
