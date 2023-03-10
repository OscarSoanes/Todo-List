const addButton = document.getElementById("addButton");

export function hideAddTaskButton() {
  addButton.classList.add("invisible");
}

export function showAddTaskButton() {
  addButton.classList.remove("invisible");
}
