import express from "express";
import Conversation from "../models/ConversationModel.js"


const conversationRouter = express.Router();

conversationRouter.get("/:id", async (req, res) => {
    try {
        const conversation = await Conversation.find({members:{$in:[req.params.id]}, 
        })
            res.status(201).json(response);

        } catch(err){
            return res.status(500).json(err)
        }
    }
)
 

conversationRouter.post("/", async (req, res) => { 
    const newConversation = new Conversation ({
        members: [req.body.senderId, req.body.receiverId]
    });

    try{ 
        const savedConversation = await newConversation.save()
        res.status(201).json(response);

    } catch(err){
        return res.status(500).json(err)
    }
})


export default conversationRouter