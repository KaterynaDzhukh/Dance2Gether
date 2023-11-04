import express from "express";
import 'dotenv/config';
import client from "./db/db.js";
import cors from "cors";
import UserRouter from "./Routes/userRoute.js"



const app = express();

app.use(express.json());

app.use("/api/users", UserRouter)

app.get("/", (req, res) => {
    res.send ("Welcome to our Dance2Gether Chat")
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