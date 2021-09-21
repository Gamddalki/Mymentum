const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

const TODOS_KEY = "todos";

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const don = document.createElement("button");
  const del = document.createElement("button");
  don.innerText = "ㅁ";
  don.addEventListener("click", donTodo);
  span.innerText = newTodo.text;
  del.innerText = "X";
  //del.innerHTML += `<i class="fa-solid fa-square"></i>`;
  del.addEventListener("click", delTodo);
  li.appendChild(don);
  li.appendChild(span);
  li.appendChild(del);
  todoList.appendChild(li);
}

function donTodo(event) {
  const don = event.target;
  don.innerText = "✔";
}

function delTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
