const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("Socket connected", socket);
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
