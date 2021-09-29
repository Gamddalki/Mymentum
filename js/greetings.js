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
  const date = new Date();
  const sun = date.getHours();
  if (sun >= 0 && sun < 6) {
    grettings.innerText = `Good night, ${username}!`;
  } else if (sun >= 6 && sun < 12) {
    grettings.innerText = `Good morning, ${username}!`;
  } else if (sun >= 12 && sun < 18) {
    grettings.innerText = `Good afternoon, ${username}!`;
  } else if (sun >= 18) {
    grettings.innerText = `Good evening, ${username}!`;
  }
  grettings.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLoginSubmit);
