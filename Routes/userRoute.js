import express from "express";
const UserRouter = express.Router();

UserRouter.post("/register", (req, res) => {
    res.send("Register");
})

export default UserRouter
