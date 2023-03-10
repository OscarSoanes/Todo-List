export function emptyTodo() {
  const todoTitle = document.querySelector("#text");
  todoTitle.value = "";
  const todoDate = document.querySelector("#date");
  todoDate.value = "";
  const todoPriority = document.querySelector("#selected");
  todoPriority.value = "low";
  const todoDesc = document.querySelector("#desc");
  todoDesc.value = "";
}

export function resetAndEmptyTodo() {
  emptyTodo();
  const addTaskButton = document.querySelector("#add-task-button");
  const addTaskContainer = document.querySelector("#add-task-container");
  addTaskButton.classList.remove("invisible-task");
  addTaskContainer.classList.add("invisible-task");
}
