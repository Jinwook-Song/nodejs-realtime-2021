import { disableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideCanvansControls,
  resetCanvas,
  showCanvasControls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideCanvansControls();
};

export const handleLeaderNotification = ({ word }) => {
  enableCanvas();
  showCanvasControls();
  disableChat();
  notifs.innerText = `You are the leader, paint ${word}`;
};

export const handleGameEnded = () => {
  setNotifs("Game ended.");
  disableCanvas();
  hideCanvansControls();
  resetCanvas();
};

export const handleGameStarting = () => {
  setNotifs("Game will start soon");
};
