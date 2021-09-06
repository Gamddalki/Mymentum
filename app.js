const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const grettings = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  grettings.innerText = `Hello ${username}!`;
  grettings.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLoginSubmit);
