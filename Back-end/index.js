import express from "express";
import 'dotenv/config';
import client from "./db/db.js";
import cors from "cors";
import authRouter from "./Routes/authRouter.js"
import conversationRouter from "./Routes/conversation.js"
import messagesRouter from "./Routes/messages.js"
import articleRouter from "./Routes/article.js"
import reviewRouter from "./Routes/reviewRouter.js"
import sliderRouter from "./Routes/sliderRouter.js";
import socket from "./socket.js";
import danceRouter from "./Routes/danceRouter.js";
import cityRouter from "./Routes/cityRouter.js";
import genderRouter from "./Routes/genderRouter.js";
import searchRouter from "./Routes/searchRouter.js";
import profileRouter from "./Routes/profileRouter.js";
import homepageLoggedIn from "./Routes/homepageLoggedIn.js";

const app = express();
const server = socket(app);

app.use(
  cors({
    origin: "http://localhost:5173",
   // "Access-Control-Allow-Origin": "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials", "Accept"],
    credentials: true,
  })
)

app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/conversation", conversationRouter)
app.use("/api/messages", messagesRouter)
app.use("/api/article", articleRouter)
app.use("/api/review", reviewRouter)
app.use("/api/slider", sliderRouter)
app.use("/api/dances", danceRouter)
app.use("/api/cities", cityRouter)
app.use("/api/genders", genderRouter)
app.use("/api/search", searchRouter)
app.use("/api/profile", profileRouter)
app.use("/api/homepage_logged", homepageLoggedIn)


app.get("/", (req, res) => {
    res.send ("Welcome to our Dance2Gether Chat")
});


  const port = process.env.PORT || 3000;

  client.on('connected', () => {
      server.listen(port, () => {
          console.log(`Server listening on port ${port}`)
      })
  })