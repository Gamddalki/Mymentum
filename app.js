const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const grettings = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
} else {
  showGreetings(savedUsername);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);
  showGreetings(username);
}

function showGreetings(username) {
  grettings.innerText = `Hello, ${username}!`;
  grettings.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLoginSubmit);
