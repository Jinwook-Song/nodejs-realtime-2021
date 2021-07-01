import { handleNewMessage } from "./chat";
import { handleDisconnected, handleNewUser } from "./notifications";
import { handleBeganPath, handledFilled, handleStrokedPath } from "./paint";
import {
  handleGameEnded,
  handleGameStarted,
  handleGameStarting,
  handleLeaderNotification,
  handlePlayerUpdate,
} from "./players";

let socket = null;

export const getSocket = () => socket;

export const initSockets = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnected);
  aSocket.on(events.newMsg, handleNewMessage);
  aSocket.on(events.beganPath, handleBeganPath);
  aSocket.on(events.strokedPath, handleStrokedPath);
  aSocket.on(events.filled, handledFilled);
  aSocket.on(events.playerUpdate, handlePlayerUpdate);
  aSocket.on(events.gameStarted, handleGameStarted);
  aSocket.on(events.leaderNotification, handleLeaderNotification);
  aSocket.on(events.gameEnded, handleGameEnded);
  aSocket.on(events.gameStarting, handleGameStarting);
};
