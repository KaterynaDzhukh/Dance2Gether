import express from 'express';
import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();
const secret = process.env.SECRET_TOKEN;

const generateToken = (data) => {
    return jwt.sign(data, secret, {expiresIn: '1800s'})
}

const middlewareAuthorizationFunction = (req, res, next) => {
    //Get token from header
    const token = req.headers.authorization
    if(!token){
        return res.sendStatus(401)
    }
    const tokenData = token.split(' ')[1];
    console.log(tokenData)
    //Verify token
    jwt.verify(tokenData, secret, (err, user) => {
        if(err){
            return res.sendStatus(401)
        }
        req.user = user;
        next();
    })
}

authRouter.get("/", async (req, res)=> {
    try{
    const response = await User.find();
    res.json(response)

} catch(err){
    res.status(500).json(err)
}
})

authRouter.get("/:id", middlewareAuthorizationFunction, async(req, res)=> {
    try {
    const response = await User.findById(req.user.id).populate('city_id').populate('dance_id').populate('gender_id')
    res.json(response)
    } catch(err){
        res.status(500).json(err);
    }
});
authRouter.post("/register", async (req, res) => {
    const {userName, email, password} = req.body;
    try {
        const username= await User.findOne({userName});
        if(username){
            return res.status(400).send('User already exists.');
        }
        const userEmail= await User.findOne({email});
        if(userEmail){
            return res.status(400).send('Email already in use.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const response = await User.create({userName, email, password: hashedPassword});
        res.status(201).json(response);
        //res.redirect('/update/:id')

    } catch(err){
        return res.status(500).json(err)
    }
})
authRouter.post("/login", async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).send('User not found');
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return res.status(400).send('Password is incorrect!');
        }
        const token = generateToken({id: user._id});
        res.set('token', token);
        res.set('Access-Control-Expose-Headers', 'token');
        res.json( {token, user} );
        //res.redirect('/homepage_logged');
    } catch(err){
        res.status(500).json(err)
        res.redirect('back');

    }
})

authRouter.get('/user/:id',  async (req, res) => {
    try {
        const response = await User.findById(req.params.id).populate('city_id').populate('dance_id').populate('gender_id')
        console.log(response, "response")

        if(!response){
            return res.status(404).json({ message: 'User does not exist' })

        }
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});


export default authRouter;