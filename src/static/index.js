/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const socket = io("/");
const sendMessage = (message) => {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
};

const setNickname = (nickname) => {
  socket.emit("setNickname", { nickname });
};

const handleMessageNotif = (data) => {
  const { message, nickname } = data;
  console.log(`${nickname} said: ${message}`);
};

socket.on("messageNotif", handleMessageNotif);
