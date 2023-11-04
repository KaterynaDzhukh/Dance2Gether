import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        trim: true
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
    }  
}, {timestamps: true})

const User = mongoose.model("User", UserSchema)

export default User
