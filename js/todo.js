const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const todos = [];

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const don = document.createElement("button");
  const del = document.createElement("button");
  don.innerText = "ㅁ";
  don.addEventListener("click", donTodo);
  span.innerText = newTodo;
  del.innerText = "❌";
  del.addEventListener("click", delTodo);
  li.appendChild(don);
  li.appendChild(span);
  li.appendChild(del);
  todoList.appendChild(li);
}

function donTodo(event) {
  const don = event.target.parentElement;
  don.innerText = "✔";
}

function delTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

todoForm.addEventListener("submit", handleTodoSubmit);
