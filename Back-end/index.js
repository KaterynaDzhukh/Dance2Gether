import express from "express";
import 'dotenv/config';
import client from "./db/db.js";
import http from "http";
import cors from "cors";
import registrationRouter from "./Routes/registrationRouter.js"
import {Server} from "socket.io";


const app = express();

app.use(express.json());


app.use("/api/registration", registrationRouter)


app.get("/", (req, res) => {
    res.send ("Welcome to our Dance2Gether Chat")
});

const server = http.createServer(app);
const io = new Server(server, {
    cors: {origin:"http://localhost:3000", methods: ["GET", "POST"]},
});

io.on("connection", (socket) => {
    console.log(`a user connected ${socket.id}`);
  
    socket.on("send_message", (data) => {
      socket.broadcast.emit("receive_message", data);
    });
  });

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET"],
      allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"],
      credentials: true,
    })
  )
 



  const port = process.env.PORT || 3000;

  client.on('connected', () => {
      app.listen(port, () => {
          console.log(`Server listening on port ${port}`)
      })
  })