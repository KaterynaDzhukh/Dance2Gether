import express from "express";
import 'dotenv/config';
import client from "./db/db.js";
import cors from "cors";
import registrationRouter from "./Routes/registrationRouter.js"
import conversationRouter from "./Routes/conversation.js"
import messagesRouter from "./Routes/messages.js"
import socket from "./socket.js";
import danceRouter from "./Routes/danceRouter.js";
import cityRouter from "./Routes/cityRouter.js";
import genderRouter from "./Routes/genderRouter.js";


const app = express();
const server = socket(app);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"],
    credentials: true,
  })
)

app.use(express.json());

app.use("/api/registration", registrationRouter)
app.use("/api/conversation", conversationRouter)
app.use("/api/messages", messagesRouter)
app.use("/api/dances", danceRouter)
app.use("/api/cities", cityRouter)
app.use("/api/genders", genderRouter)

app.get("/", (req, res) => {
    res.send ("Welcome to our Dance2Gether Chat")
});


  const port = process.env.PORT || 3000;

  client.on('connected', () => {
      server.listen(port, () => {
          console.log(`Server listening on port ${port}`)
      })
  })