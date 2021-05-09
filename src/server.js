import "core-js";

import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketConroller";
import events from "./events";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

// http 서버에 socketIO 서버를 올림, Traffic이 달라서 같은 PORT 사용 가능
const io = socketIO(server);

// 연결되어있는 각 socket
io.on("connection", (socket) => socketController(socket, io));
