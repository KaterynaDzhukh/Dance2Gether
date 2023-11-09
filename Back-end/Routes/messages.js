import express from "express";
import Message from "../models/MessageModel.js"

const messagesRouter = express.Router();

messagesRouter.post("/", async(req,res) => {
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);

    } catch(err){
        return res.status(500).json(err)

    }
}
)

messagesRouter.get("/:id", async (req,res) => {

    try{
        const messages = await Message.find({
            conversationId: req.params.id
        });
        res.status(201).json(messages);

    } catch(err){
        return res.status(500).json(err)
    }
})

export default messagesRouter;