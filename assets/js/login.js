import { initSockets } from "./sockets";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const logIn = (nickname) => {
  // eslint-disable-next-line no-undef
  const socket = io("/"); // connect everywhere
  socket.emit(window.events.setNickname, { nickname });
  initSockets(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  console.log(value);
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
