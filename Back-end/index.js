import express from "express";
import 'dotenv/config';
import client from "./db/db.js";
import cors from "cors";
import registrationRouter from "./Routes/registrationRouter.js"
import conversationRouter from "./Routes/conversation.js"
import socket from "./socket.js";


const app = express();
const server = socket();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"],
    credentials: true,
  })
)

app.use(express.json());



app.use("/api/registration", registrationRouter)
app.use("/api/conversation", conversationRouter)

app.get("/", (req, res) => {
    res.send ("Welcome to our Dance2Gether Chat")
});





 



  const port = process.env.PORT || 3000;

  client.on('connected', () => {
      server.listen(port, () => {
          console.log(`Server listening on port ${port}`)
      })
  })