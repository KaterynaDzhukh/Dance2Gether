import express from 'express';
import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerRouter = express.Router();
const secret = process.env.SECRET_TOKEN;

const generateToken = (data) => {
    return jwt.sign(data, secret, {expiresIn: '1800s'})
}

registerRouter.get("/", async (req, res)=> {
    try{
    const response = await User.find();
    res.json(response)

  } catch(err){
      res.status(500).json(err)
  }
})

registerRouter.get("/:id", async(req, res)=> {
    try {
        const id = req.params.id
      const response = await User.findById(id);
      res.json(response)
    } catch(err){
        res.status(500).json(err);
    }
});

registerRouter.post("/", async (req, res) => {
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
registerRouter.post("/login", async (req, res) => {
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
        const token = generateToken({email: user.email});
        res.json({token})
        res.redirect('/loggedIn');
    } catch(err){
        res.status(500).json(err)
        res.redirect('back');

    }
})


export default registerRouter;