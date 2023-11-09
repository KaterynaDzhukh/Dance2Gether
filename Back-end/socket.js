import {Server} from "socket.io";
import http from "http";

const socket = (app) => {
    const server = http.createServer(app) 
    const io = new Server(server, {
        cors: {
            origin:"http://localhost:5173", 
            methods: ["GET", "POST"],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log(`a user connected ${socket.id}`);

        socket.on("send_message", (data) => {
          io.emit("receive_message", data);
        });
    }); 

    return server;  // Return the server instead of io
}

export default socket;