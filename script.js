function addTodo() {
  const inputValue = document.querySelector("#intValue");
  const todoList = document.querySelector("#todoList");

  if (inputValue.value.trim() != "") {
    const li = document.createElement("li");
    li.innerHTML = `${inputValue.value} <button onclick="removeTodo(this)" class='rm' >Remove Todo</button>`;
    todoList.appendChild(li);
  }
}

function removeTodo(button) {
  const li = button.parentNode;
  const todoList = li.parentNode;
  todoList.removeChild(li)
}
