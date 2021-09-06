const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function loginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please enter your name");
  }
}

loginButton.addEventListener("click", loginBtnClick);
