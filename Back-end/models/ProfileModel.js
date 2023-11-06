import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userName_id: {
         type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },  
    dance_id: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dance'
    }],
    aboutMe: {
        type: String,
        required: false,
        maxlength: 100,
        trim: true
    },
    profilePicture: {
        type: String,
        required: false,
        trim: true
    },
    city_id: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
    morePictures: [{
        type: String,
        required: false,
        trim: true
    }]
}, {timestamps: true})

const Profile = mongoose.model("Profile", ProfileSchema)

export default Profile